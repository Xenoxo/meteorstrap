Template.main.onRendered(function() {
		
			$('#display').flapper({
			width:8,
			timing: 250,
			min_timing: 20,
			//chars: ['0','1','2','3','4','5','6','7','8','9'],
			}).val(19345.68).change();
		
});

/*
Template.main.events({
	//'click #clickme':function(){alert("BUTTS!");}
	'click #clickme':function(){
		$('#display').flapper({
		}).val(123).change();
	}
	//'click #clickme': function(){$('#display').flapper(options).val(12345).change()};
	
}); */