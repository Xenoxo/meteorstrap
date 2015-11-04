Router.configure({
	//layoutTemplate: 'layout',
});

Router.route('/', {
	name: 'main'
	}
);

Router.route('/about');
/*

	waitOn: function(){
		return [IRLibLoader.load('https://googledrive.com/host/0B_N_FXwpAK5nazk0STRzYUh6RUU'), IRLibLoader.load("smthels.js")];
	},

Router.route('/about', function () {
  this.render('about');
});


Router.route('/about',function() {
	this.render('about');
});

Router.map(function(){
	this.route('homea',{
		path:'/',
	});
});

*/