import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  codeReviews: attr('boolean', { defaultValue: true }),
  prototyping: attr('boolean', { defaultValue: true }),
  failFast: attr('boolean', { defaultValue: true }),
  unitTests: attr('boolean', { defaultValue: true }),
  integrationTests: attr('boolean', { defaultValue: true }),
  buildServer: attr('array-enum', {
    options: [
      'Not Yet Chosen',
      'Jenkins',
      'Travis',
      'Codeship',
      'CircleCI'
    ],
    defaultValue: ['Not Yet Chosen']
  }),
  staticCodeAnalysis: attr('array-enum', {
    options: [
      'Not Yet Chosen',
      'ESLint'
    ],
    defaultValue: ['Not Yet Chosen']
  }),
  versionControl: attr('array-enum', {
    options: [
      'Not Yet Chosen',
      'Git',
      'BitBucket'
    ],
    defaultValue: ['Not Yet Chosen']
  }),
  issueTracker: attr('array-enum', {
    options: [
      'Not Yet Chosen',
      'GitHub',
      'Jira',
      'Tikkit'
    ],
    defaultValue: ['Not Yet Chosen']
  }),
  standUps: attr('boolean', { defaultValue: true }),
  quickStart: attr('boolean', { defaultValue: true }),
  commitOnDayOne: attr('boolean', { defaultValue: true })
});
