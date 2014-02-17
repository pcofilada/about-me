App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('blog');
  this.resource('contact');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
