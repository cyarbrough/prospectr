import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Job Methodology model 
   * @var {*}
   */
  jobMethod: null,
  /**
   * Prospect Methodology model 
   * @var {*}
   */
  prospectMethod: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['card', 'card-methodology'],
  /**
   * Alias of jobEssentials
   * @var {*}
   */
  job: computed.alias('jobMethod'),
  /**
   * Alias of prospectEssentials
   * @var {*}
   */
  prospect: computed.alias('prospectMethod')
});