Template.main.onRendered(function() { //calculations need to run in here as iaffects the main page
//DataTest is being derived from tweetdata.js
        var currentTotal = TweetData.findOne({},{sort:{tweetID:-1}}).total;
        var displayTotal = currentTotal.toFixed(2);

        $('#display').flapper({
        width:8,
        timing: 250,
        min_timing: 20,
        }).val(displayTotal).change();     
    $('#the-number').text(displayTotal);    
}); 

if (Meteor.is_client) {
    Meteor.startup(function () {
        var currentTotal = TweetData.findOne({},{sort:{tweetID:-1}}).total;
        var displayTotal = currentTotal.toFixed(2);

        $('#display').flapper({
        width:8,
        timing: 250,
        min_timing: 20,
        }).val(displayTotal).change(); 
    });
}

Template.main.onCreated(function(){
    Meteor.Loader.loadJs("");
});


Template.main.helpers({
    getTwitter: function () {
        return ReactiveMethod.call("twitterCall");
    }
});