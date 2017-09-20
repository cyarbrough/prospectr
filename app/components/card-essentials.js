import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Job Essentials model 
   * @var {*}
   */
  jobEssentials: null,
  /**
   * Prospect Essentials model 
   * @var {*}
   */
  prospectEssentials: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['card-essentials'],
  /**
   * Alias of jobEssentials
   * @var {*}
   */
  job: computed.alias('jobEssentials'),
  /**
   * Alias of prospectEssentials
   * @var {*}
   */
  prospect: computed.alias('prospectEssentials')
});
