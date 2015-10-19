Meteor.methods({
	twitterCall: function(){
		Twit.get('statuses/user_timeline', {user_id:600434038, count:5, exclude_replies:true }, function(err, data, response) {
			var str;
			for (var i = data.length - 1; i >= 0; i--) {
				str = data[i].text.split(" ");
				tagPos = str.indexOf("#paid");
				if(tagPos >= 0){
					console.log(str[tagPos] + str[tagPos+1]);
					//change this to add data to the mongoDB
				}
				
				
			}
		});
	}
});

Twit = new TwitMaker({
    consumer_key:'QOkwkQ5xUWBSLiKI69JxHw2jt',
    consumer_secret:'1uSahkvGheSNGQR3K9rf9ao1SYO289Ph0DLEuTvwor3MqmllL4',
    access_token:'600434038-AjJuNPRiSOkuK1FwXqQdR9egfu0304fhvQe3ueR9',
    access_token_secret:'fIHXdJlLgqx6SAd0C8PoKF1ubteagbYtoG494A6nOBqQs'
});