import Ember from 'ember';
const { Component, computed, String: { dasherize } } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Type of component to display the data as
   * @var {string}
   */
  displayType: 'string',
  /**
   * Left compare
   * @var {*}
   */
  left: null,
  /**
   * Right compare 
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
  classNameBindings: ['classTitle', 'isEqual'],

  /**
   * Indicates if data items are equal
   * @var {boolean}
   */
  isEqual: computed('left', 'right', function () {
    let left = this.get('left'),
      right = this.get('right');

    if (left && left.value) {
      return left.value === right.value;
    }

    return left === right;
  }),

  /******************************** Computed */
  /**
   * CSS appropriate class name, rendered from displayType
   * @var {string}
   */
  classType: computed('displayType', function () {
    let type = this.get('displayType');

    if (type) {
      return 'is-' + dasherize(type).toLowerCase().replace(/[\W]+/g, '');
    }
    return type;
  }),
  /**
   * CSS appropriate class name, rendered from title
   * @var {string}
   */
  classTitle: computed('title', function () {
    let title = this.get('title');

    if (title) {
      return dasherize(title).toLowerCase().replace(/[\W]+/g, '');
    }
    return title;
  }),
  /**
   * Returns string for component name to display data with
   * @var {string}
   */
  displayComponent: computed('displayType', function () {
    let type = this.get('displayType');

    if (type === 'boolean') {
      return 'comparison-row-boolean';
    } else if (type === 'chart') {
      return 'comparison-row-chart';
    }
    return 'comparison-row-string';
  })
});