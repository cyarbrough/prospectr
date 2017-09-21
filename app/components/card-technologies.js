import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Job Technologies model 
   * @var {*}
   */
  jobTechs: null,
  /**
   * Prospect Technologies model 
   * @var {*}
   */
  prospectTechs: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['card', 'card-technologies'],
  /**
   * Alias of jobEssentials
   * @var {*}
   */
  job: computed.alias('jobTechs'),
  /**
   * Alias of prospectEssentials
   * @var {*}
   */
  prospect: computed.alias('prospectTechs')
});