import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  operatingSystem: attr('array-enum', {
    options: [
      'MacOSX',
      'CentOS',
      'Ubuntu',
      'Windows'
    ],
    defaultValue: ['MacOSX']
  }),
  computer: attr('enum', {
    options: [
      'Workstation',
      'Laptop'
    ],
    defaultValue: ['Workstation']
  })
});
