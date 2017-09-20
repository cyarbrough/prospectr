import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Job Essentials model 
   * @var {number}
   */
  matchPercent: 0,

  /******************************** Variables */
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['match-rating'],
  classNameBindings: ['isLow', 'isMid', 'isHigh'],

  /******************************** Computed */
  /**
   * Components class names
   * @var {[]}
   */
  iconName: computed('matchPercent', function () {
    if (this.get('isHigh')) {
      return 'heart';
    } else if (this.get('isMid')) {
      return 'check-circle';
    }
    return 'exclamation-triangle';
  }),
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