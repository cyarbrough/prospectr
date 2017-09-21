import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Match rating percent
   * @var {number}
   */
  display: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['icon'],

  /******************************** Computed */
  /**
   * Components icon names
   * @var {[]}
   */
  iconName: computed('display', function () {
    if (this.get('display') === 'prospect') {
      return 'child';
    }
    return 'building-o';
  }),
  /**
   * Components icon names
   * @var {[]}
   */
  tooltip: computed('display', function () {
    if (this.get('display') === 'prospect') {
      return 'Requested';
    }
    return 'Suggested';
  })
});
