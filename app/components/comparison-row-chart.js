import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Data to display
   * @var {string}
   */
  data: 'None',

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['chart'],
  classNameBindings: ['isNone', 'isFamiliar', 'isGood', 'isExpert'],

  /******************************** Computed */
  /**
   * Indicates if data equals None
   * @var {boolean}
   */
  isNone: computed('data', function () {
    return this.get('data') === 'None';
  }),
  /**
   * Indicates if data equals Familiar
   * @var {boolean}
   */
  isFamiliar: computed('data', function () {
    return this.get('data') === 'Familiar';
  }),
  /**
   * Indicates if data equals Good
   * @var {boolean}
   */
  isGood: computed('data', function () {
    return this.get('data') === 'Good';
  }),
  /**
   * Indicates if data equals Expect
   * @var {boolean}
   */
  isExpert: computed('data', function () {
    return this.get('data') === 'Expert';
  })
});
