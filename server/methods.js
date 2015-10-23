var Twit = new TwitMaker({
    consumer_key:'QOkwkQ5xUWBSLiKI69JxHw2jt',
    consumer_secret:'1uSahkvGheSNGQR3K9rf9ao1SYO289Ph0DLEuTvwor3MqmllL4',
    access_token:'600434038-AjJuNPRiSOkuK1FwXqQdR9egfu0304fhvQe3ueR9',
    access_token_secret:'fIHXdJlLgqx6SAd0C8PoKF1ubteagbYtoG494A6nOBqQs'
});
/*
function tweetInsert(){
	TweetData.insert({tweetBlob: "tweet"});
	console.log("success!");
}

*/
dataReply = "";
/*
	Twit.get('statuses/user_timeline', 
		{user_id:600434038, count:10, exclude_replies:true }, 
		Meteor.bindEnvironment(function(err, data, response) { 
			dataReply = data; 
			console.log(dataReply[1].text);
  			TweetData.insert({tweetBlob: "tweet1"});
		})
	);
	
function twitterCall(){
	
}*/

	
	

function twitterCall(){
		Twit.get('statuses/user_timeline', 
		{user_id:600434038, count:10, exclude_replies:true }, 
		Meteor.bindEnvironment(
		function(err, data, response) { 
			var str,tagPos;
			for (var i = data.length - 1; i >= 0; i--) {
				str = data[i].text.split(" ");
				tagPos = str.indexOf("#paid");
				if(tagPos >= 0){ //return -1 if there is no #paid value
					
					//do things in here

					//TweetData.insert({tweetBlob: data});
					console.log(data);
					//console.log(TweetData.find());
					//console.log(str[tagPos] + str[tagPos+1]);
					
				}
			}

			
  			//TweetData.insert({tweetBlob: "tweet3"});
		}
		)
		);
	
	}



function testing(){
	
}

//console.log(dataReply);
Meteor.setInterval(twitterCall, 10000);




//TweetData.insert({tweetBlob: "tweet"});


//setInterval(serverTwitter, 10000);



