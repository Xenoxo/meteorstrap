Meteor.methods({
	twitter: function(){
		this.unblock();
		try {
			console.log("SUCCESS111");
			var url = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=2&oauth_consumer_key=QOkwkQ5xUWBSLiKI69JxHw2jt&oauth_token=600434038-AjJuNPRiSOkuK1FwXqQdR9egfu0304fhvQe3ueR9&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1444882234&oauth_nonce=pTcIvE&oauth_version=1.0&oauth_signature=03%2BFaJhpL1gSyrJCm0sIl4SS3T8%3D";
			console.log(url);
			var result = Meteor.http.get(url);
			var datablob = result.data;
			console.log(result);
			console.log("SUCCESS!");
			return result.data.response;
		} catch (error){
			console.log(error);
			return error;
		}
	}
});