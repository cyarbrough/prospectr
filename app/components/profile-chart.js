import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Match rating percent
   * @var {number}
   */
  display: null,
  /**
   * Match rating percent
   * @var {*}
   */
  profile: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['profile-chart'],
  classNameBindings: ['display:is-prospect']
});
