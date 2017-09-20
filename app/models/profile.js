import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  newFeatures: attr('number'),
  clientSupport: attr('number'),
  documentation: attr('number'),
  maintenance: attr('number'),
  meetings: attr('number')
});
