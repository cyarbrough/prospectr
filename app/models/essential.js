import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  locations: attr('string'),
  employment: attr('array-enum', {
    options: [
      'Permanent',
      'Temporary',
      'Project'
    ],
    defaultValue: 'Permanent'
  }),
  experience: attr('array-enum', {
    options: [
      'Junior',
      'Seasoned',
      'Lead',
      'GrayBeard'
    ],
    defaultValue: ['Junior']
  }),
  startDate: attr('string'),
  companySize: attr('enum', {
    options: [
      'Less Than Ten',
      'Ten To Twenty',
      'Twenty To Fifty',
      'Fifty To Two Hundred'
    ],
    defaultValue: 'Less Than Ten'
  }),
  teamSize: attr('json', {
    defaultValue: {
      min: 1,
      max: 10
    }
  })
});
