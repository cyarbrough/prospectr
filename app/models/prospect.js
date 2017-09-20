import DS from 'ember-data';
const { attr, belongsTo, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  avatar: attr('string'),
  name: attr('string'),
  headline: attr('string'),
  other: attr(),

  /******************************** Relationships */
  essentials: belongsTo('essential'),
  methodology: belongsTo('methodology'),
  specifications: belongsTo('specification'),
  profile: belongsTo('profile'),
  equipment: belongsTo('equipment'),
  technologies: belongsTo('technology')
});
