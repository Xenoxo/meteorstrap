if (TweetData.find().count() === 0) {
  var now = new Date().getTime();
  for (var i = 5; i >= 0; i--) {
  	TweetData.insert({
	  	hashtag: "#testing",
	  	amount: 7,
	  	location: "Berlin, Germany",
  		time: now
  	});
  }
}