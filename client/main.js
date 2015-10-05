Template.main.onRendered(function() {
		$('#display').flapper().val(123456).change();
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