import Ember from 'ember';
const { Component, computed, String: { dasherize } } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Left compare
   * @var {*}
   */
  left: null,
  /**
   * right compare 
   * @var {*}
   */
  right: null,
  /**
   * Title of comparison
   * @var {string}
   */
  title: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['comparison-row'],
  classNameBindings: ['classTitle'],

  /******************************** Computed */
  /**
   * Alias of jobEssentials
   * @var {*}
   */
  classTitle: computed('title', function () {
    let title = this.get('title');

    if (title) {
      return dasherize(title).toLowerCase().replace(/[\W]+/g, '');
    }
    return title;
  })
});