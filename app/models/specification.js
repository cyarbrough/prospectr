import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  workload: attr('string'),
  workWeek: attr('number'),
  schedule: attr('enum', {
    options: [
      'Fixed',
      'Flexible'
    ],
    defaultValue: 'Fixed'
  }),
  remote: attr('enum', {
    options: [
      'No',
      'Negotiable',
      'Required'
    ],
    defaultValue: 'No'
  }),
  pto: attr('enum', {
    options: [
      'Accrued',
      'Unlimited'
    ],
    defaultValue: 'Accrued'
  })
});
