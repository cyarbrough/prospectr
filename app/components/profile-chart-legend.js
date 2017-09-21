import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Match rating percent
   * @var {number}
   */
  columns: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['profile-chart-legend']
});