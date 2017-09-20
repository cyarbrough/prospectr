import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Indicates if the info card is an employer-style card
   * @var {boolean}
   */
  isEmployer: false,

  /******************************** Variables */
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['card-info'],
  classNameBindings: ['isEmployer'],

  /******************************** Computed */
  /**
   * Returns icon name based on isEmployer
   * @var {string}
   */
  cardIcon: computed('isEmployer', function () {
    if (this.get('isEmployer')) {
      return 'building';
    }
    return 'child';
  }),
  /**
   * Returns filler value for sub-headline
   * @var []
   */
  subHeadline: computed('isEmployer', function () {
    if (this.get('isEmployer')) {
      return 'offering';
    }
    return 'seeking';
  })
});
