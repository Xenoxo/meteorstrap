Template.main.events({
	//'click #clickme':function(){alert("BUTTS!");}
	'click #clickme':function(){
		$('#display').flapper().val(12345).change();
	}
	//'click #clickme': function(){$('#display').flapper(options).val(12345).change()};
	
});