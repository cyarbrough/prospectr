import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Data to display
   * @var {boolean}
   */
  data: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['boolean'],
  classNameBindings: ['data:is-true'],

  /******************************** Computed */
  /**
   * Returns icon name for font awesome
   * @var {string}
   */
  iconName: computed('data', function () {
    if (this.get('data')) {
      return 'check';
    }
    return 'remove';
  })
});
