Template.main.onRendered(function() { //calculations need to run in here as iaffects the main page
	var currentTotal = 0;
  var displayTotal = currentTotal.toFixed(2);
  $('#display').flapper({
	width:8,
	timing: 250,
	min_timing: 20,
	}).val(displayTotal).change(); //DataTest is being derived from tweetdata.js
console.log();
/*
for (var i = megadump.length - 1; i >= 0; i--) {
    console.log(megadump[i].text);
  }
  var str = "#yo 988 this is a bunch of text";
  var splitstr = jQuery.map(str.split(' '),function(n){
    return n;
  });
  console.log(splitstr[0]);
*/
}); 

Template.main.helpers({
  getTwitter: function () {
    return ReactiveMethod.call("twitter");
  }
});