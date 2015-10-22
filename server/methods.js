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

//function twitterCall(){
	Twit.get('statuses/user_timeline', 
		{user_id:600434038, count:10, exclude_replies:true }, 
		Meteor.bindEnvironment(function(err, data, response) { 
			dataReply = data; 
			console.log(dataReply[1].text);
  			TweetData.insert({tweetBlob: "tweet1"});
		})
	);


//}

//twitterCall();



//console.log(dataReply);
//setInterval(, 10000);
/*
var str;
for (var i = data.length - 1; i >= 0; i--) {
	str = data[i].text.split(" ");
	tagPos = str.indexOf("#paid");
	if(tagPos >= 0){
		console.log(str[tagPos] + str[tagPos+1]);
		//change this to add data to the mongoDB
	}
}
*/

//TweetData.insert({tweetBlob: "tweet"});


//setInterval(serverTwitter, 10000);



