import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Match rating percent
   * @var {number}
   */
  matchPercent: 0,

  /******************************** Variables */
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['footer-element'],
  classNameBindings: ['isHigh', 'isLow', 'isMid'],
  /**
   * Replaces the default tag name
   * @var {string}
   */
  tagName: 'footer',
  /******************************** Computed */
  /**
   * Indicates if the match rating is high
   * @var {boolean}
   */
  isHigh: computed('matchPercent', function () {
    return this.get('matchPercent') >= 75;
  }),
  /**
   * Indicates if the match rating is low
   * @var {boolean}
   */
  isLow: computed('matchPercent', function () {
    return this.get('matchPercent') < 50;
  }),
  /**
   * Indicates if the match rating is mid
   * @var {boolean}
   */
  isMid: computed('matchPercent', function () {
    return this.get('matchPercent') >= 50 && this.get('matchPercent') < 75;
  })
});
