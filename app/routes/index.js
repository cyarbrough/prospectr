import Ember from 'ember';
const { inject, Route } = Ember;

export default Route.extend({
  /**
   * Services
   */
  ajax: inject.service(),

  /******************************** Functions */
  /**
   * Pushes data into the payload, returns 
   * @param {*} buildingData 
   * @return {*} model data
   */
  handleJobSuccess(jobData) {
    let store = this.get('store');

    store.pushPayload(jobData);

    return store.peekRecord('job', '1');
  },
  /**
   * Main model data for App
   */
  model() {
    return this.get('ajax').request('data/job.json').then((jobData) => { return this.handleJobSuccess(jobData); });
  }
});
