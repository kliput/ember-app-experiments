import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    foo() {
      window.alert('foo!');
    }
  }
});
