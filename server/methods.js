Meteor.publish("tweetdata", function(){
	return TweetData.find();
});

var latestID = 0; //used as reference for the id of the latest tweet

var Twit = new TwitMaker({
    consumer_key:'QOkwkQ5xUWBSLiKI69JxHw2jt',
    consumer_secret:'1uSahkvGheSNGQR3K9rf9ao1SYO289Ph0DLEuTvwor3MqmllL4',
    access_token:'600434038-AjJuNPRiSOkuK1FwXqQdR9egfu0304fhvQe3ueR9',
    access_token_secret:'fIHXdJlLgqx6SAd0C8PoKF1ubteagbYtoG494A6nOBqQs'
});

function twitterCall(){
		var sinceLast, total;
		sinceLast = TweetData.findOne({},{sort:{tweetID:-1}}); //returns either a blob or undefined
		if (sinceLast) {
			sinceLast = sinceLast.tweetID;
		} else { //this case only happens if I reset the entire project's DB
			sinceLast = 654503759737831400; //hardcoded, tried 0, didn't work, didn't look into why
			total = 0;
		}
		
		console.log("Start of call and the sinceLast ID "+ sinceLast);


		Twit.get('statuses/user_timeline', 
		{user_id:600434038, since_id:sinceLast, exclude_replies:true}, 
		Meteor.bindEnvironment(
			function(err, data, response) { 
				var str,tagPos,tweetID,latestID;

				//parses through each tweet
				for (var i = data.length - 1; i >= 0; i--) {
					str = data[i].text.split(" ");
					tagPos = str.indexOf("#paid");
					tweetID = data[i].id;
					//#paid needs exist | if the current tweet is newer than the latest in the DB 
					if(tagPos >= 0 && tweetID > sinceLast ){ //tagPos returns -1 if there is no #paid value 
						var amount = Number(str[tagPos+1]);
						if(total === 0){
							total = amount;
						}else{
							total = TweetData.findOne({},{sort:{tweetID:-1}}).total + amount;
							//console.log("the total is "+ total);
						}
						latestID = tweetID;
						TweetData.insert({
							amount: amount,
							total: total,
							tweetID: data[i].id,
							tweetBlob: data
						});
						console.log("Total in the loop right now "+total);			
					}
				}
			console.log("App total is " + TweetData.findOne({},{sort:{tweetID:-1}}).total);
			}

		)
		);
		
	}
Meteor.setInterval(twitterCall, 120000); //1000 = 1 second, currently set to 2 minutes/refresh


//latestID = TweetData.findOne({},{fields:{'tweetID': 1, _id:0}},{sort:{tweetID:-1}}).tweetID;
