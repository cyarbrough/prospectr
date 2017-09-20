import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Job Methodology model 
   * @var {*}
   */
  jobSpecs: null,
  /**
   * Prospect Methodology model 
   * @var {*}
   */
  prospectSpecs: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['card-methodology'],
  /**
   * Alias of jobEssentials
   * @var {*}
   */
  job: computed.alias('jobSpecs'),
  /**
   * Alias of prospectEssentials
   * @var {*}
   */
  prospect: computed.alias('prospectSpecs')
});