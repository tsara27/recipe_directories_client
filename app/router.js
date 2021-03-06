import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('recipes', { path: '/'});
  this.route('recipe', { path: '/recipes/:recipe_id' });
});

export default Router;
