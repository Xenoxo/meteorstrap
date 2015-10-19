Template.main.onRendered(function() { //calculations need to run in here as iaffects the main page
	var currentTotal = 0;
  var displayTotal = currentTotal.toFixed(2);
  $('#display').flapper({
	width:8,
	timing: 250,
	min_timing: 20,
	}).val(displayTotal).change(); //DataTest is being derived from tweetdata.js

    reatedAt = new Date().valueOf();
    console.log(Math.floor(reatedAt/100));

  
}); 

Template.main.helpers({
  getTwitter: function () {
    return ReactiveMethod.call("twitterCall");
  }
});