/*
Template.main.onRendered(function() {
    console.log(TweetData.findOne({}));
});*/
var handle = Meteor.subscribe('tweetdata');
Template.main.onRendered(function() {
    Meteor.subscribe('tweetdata', function(){
    // console.log(TweetData.findOne({},{sort:{tweetID:-1}}).total);
    var currentTotal = TweetData.findOne({},{sort:{tweetID:-1}}).total; //returns the latest sum
    var displayTotal = currentTotal.toFixed(2);
    $('#display').flapper({
    width:8,
    timing: 250,
    min_timing: 20,
    }).val(displayTotal).change();
});
}); 


Template.main.onCreated(function(){
    Meteor.Loader.loadJs("");
});


Template.main.helpers({
    getTwitter: function () {
        return ReactiveMethod.call("twitterCall");
    }
});