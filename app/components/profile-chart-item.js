import Ember from 'ember';
const { Component, computed, observer } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Match rating percent
   * @var {number}
   */
  percent: 0,
  /**
   * Match rating percent
   * @var {string}
   */
  title: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['item'],

  /******************************** Computed */
  /**
   * Tooltip for element
   * @var {string}
   */
  tooltip: computed('percent', 'title', function () {
    return this.get('percent') + '% ' + this.get('title');
  }),

  /******************************** Functions */
  /**
   * Called after element is rendered
   */
  didRender() {
    this.percentObserver();
  },

  /******************************** Observers */
  /**
   * Called after percent is changed; changes width of associated element
   */
  percentObserver: observer('percent', function () {
    let percent = this.get('percent') - 1;

    if (percent < 1) {
      percent = 1;
    }

    this.set('percentWidth', percent + '%');
  })
});
