var latestID = 0; //used as reference for the id of the latest tweet

var Twit = new TwitMaker({
    consumer_key:'QOkwkQ5xUWBSLiKI69JxHw2jt',
    consumer_secret:'1uSahkvGheSNGQR3K9rf9ao1SYO289Ph0DLEuTvwor3MqmllL4',
    access_token:'600434038-AjJuNPRiSOkuK1FwXqQdR9egfu0304fhvQe3ueR9',
    access_token_secret:'fIHXdJlLgqx6SAd0C8PoKF1ubteagbYtoG494A6nOBqQs'
});

function twitterCall(){
		var sinceLast = TweetData.findOne({},{sort:{tweetID:-1}}); 
		if (sinceLast) {
			sinceLast = sinceLast.tweetID;
		} else {
			sinceLast = 654503759737831400; //hardcoded, tried 0, didn't work, didn't look into why
		}
		console.log("The sinceLast ID "+ sinceLast);
		Twit.get('statuses/user_timeline', 
		{user_id:600434038, since_id:sinceLast, exclude_replies:true }, 
		Meteor.bindEnvironment(
			function(err, data, response) { 
				var str,tagPos,tweetID,latestID;

				//parses through each tweet
				for (var i = data.length - 1; i >= 0; i--) {
					str = data[i].text.split(" ");
					tagPos = str.indexOf("#paid");
					tweetID = data[i].id;
					//latestID = TweetData.findOne({},{fields:{'tweetID': 1, _id:0}},{sort:{tweetID:-1}}).tweetID;

					//#paid needs exist | the inverse of (is this tweetID already in the DB?)
					if(tagPos >= 0 && !TweetData.findOne({},{sort:{tweetID:-1}})){ //tagPos returns -1 if there is no #paid value 
						var amount = Number(str[tagPos+1]);
						//var total = TweetData.find({},{sort:{_id:-1},limit:1}).fetch() + amount;
						latestID = tweetID;
						TweetData.insert({
							amount: amount,
							//total: total,
							tweetID: data[i].id,
							tweetBlob: data
						});
						console.log("This shouldn't show up " +tweetID);
					}
				}
			}
		)
		);
		
	}
Meteor.setInterval(twitterCall, 5000);
