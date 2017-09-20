import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  /**
   * Placeholder variable, used to determine skill level
   * @var string
   */
  levels: attr('enum', {
    options: [
      'Familiar',
      'Good',
      'Expert'
    ],
    defaultValue: 'Familiar'
  }),
  skills: attr()
});
