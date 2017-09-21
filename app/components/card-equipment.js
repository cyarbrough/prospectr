import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed-In Variables */
  /**
   * Job Equipment model 
   * @var {*}
   */
  jobEquipment: null,
  /**
   * Prospect Equipment model 
   * @var {*}
   */
  prospectEquipment: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['card', 'card-equipment'],
  /**
   * Alias of jobEssentials
   * @var {*}
   */
  job: computed.alias('jobEquipment'),
  /**
   * Alias of prospectEssentials
   * @var {*}
   */
  prospect: computed.alias('prospectEquipment')
});