import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s6-пользователь-l');
  this.route('i-i-s-i-s-s6-пользователь-e',
  { path: 'i-i-s-i-s-s6-пользователь-e/:id' });
  this.route('i-i-s-i-s-s6-пользователь-e.new',
  { path: 'i-i-s-i-s-s6-пользователь-e/new' });
  this.route('i-i-s-i-s-s6-рабочее-место-l');
  this.route('i-i-s-i-s-s6-рабочее-место-e',
  { path: 'i-i-s-i-s-s6-рабочее-место-e/:id' });
  this.route('i-i-s-i-s-s6-рабочее-место-e.new',
  { path: 'i-i-s-i-s-s6-рабочее-место-e/new' });
});

export default Router;
