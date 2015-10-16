// Client name - vs - Server name
TweetData = new Mongo.Collection('tweetdata');

DataTest = function(){
	var tweetCursor = TweetData.find();
	var sum = 99;
	tweetCursor.forEach(function(post){ //iterate over each of the items in the cursor - post is a variable name
		sum += post.amount;
	});
	return sum.toFixed(2);
};