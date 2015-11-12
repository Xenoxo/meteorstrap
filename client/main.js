/*
Template.main.onRendered(function() {
    console.log(TweetData.findOne({}));
});*/
var handle = Meteor.subscribe('tweetdata');

function getNumber(){
    Meteor.subscribe('tweetdata', function(){ //putting the calculations in subscribe callback func because need to wait for server to be ready before call
        var currentTotal = TweetData.findOne({},{sort:{tweetID:-1}}).total; //returns the latest sum
        var displayTotal = currentTotal.toFixed(2);
        $('.flapper').remove(); //for some reason flapper is stacking...could make this more elegant by making .change call a variable?
        $('#display').flapper({
        width:8,
        timing: 250,
        min_timing: 20,
        }).val(displayTotal).change();
    });
}

Template.main.onRendered(function() {
    getNumber();
    Meteor.setInterval(getNumber,10000);
}); 


Template.main.onCreated(function(){
    Meteor.Loader.loadJs("");
});


Template.main.helpers({
    getTwitter: function () {
        return ReactiveMethod.call("twitterCall");
    }
});