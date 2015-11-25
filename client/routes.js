Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/angular1', {name: 'angular1', controller: 'Angular1Controller'});
Router.route('/angular2', {name: 'angular2', controller: 'Angular2Controller'});
Router.route('/react', {name: 'react', controller: 'ReactController'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});

Angular1Controller = RouteController.extend({
  action: function() {
  	this.render('angular1', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});

Angular2Controller = RouteController.extend({
  action: function() {
  	this.render('angular2', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});

ReactController = RouteController.extend({
  action: function() {
  	this.render('react', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});