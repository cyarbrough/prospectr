import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Job Profile model 
   * @var {*}
   */
  jobProfile: null,
  /**
   * Prospect Profile model 
   * @var {*}
   */
  prospectProfile: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['card', 'card-profile'],
  /**
   * Alias of jobEssentials
   * @var {*}
   */
  job: computed.alias('jobProfile'),
  /**
   * Alias of prospectEssentials
   * @var {*}
   */
  prospect: computed.alias('prospectProfile')
});