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
   * @param {*} prospectData 
   * @return {*} model data
   */
  handleProspectSuccess(prospectData) {
    let store = this.get('store');

    store.pushPayload(prospectData);

    return store.peekRecord('prospect', '2');
  },
  /**
   * Pushes data into the payload, returns 
   * @param {*} prospectData 
   * @return {*} model data
   */
  handleProspectError() {
    return {
      fileError: 'Unknown Profile'
    };
  },
  /**
   * Main model data for App
   */
  model(params) {
    let dataName = 'cyarbrough';

    if (params && params.name) {
      dataName = params.name;
    }

    return this.get('ajax').request('data/' + dataName + '.json').
      then((prospectData) => { return this.handleProspectSuccess(prospectData); }).
      catch(() => { return this.handleProspectError(); });
  }
});