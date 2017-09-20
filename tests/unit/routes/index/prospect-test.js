import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';
const { run } = Ember;

describe('Unit | Route | index/prospect', function () {
  setupTest('route:index/prospect', {
    // Specify the other units that are required for this test.
    needs: ['service:ajax', 'model:prospect']
  });

  it('exists', function () {
    let route = this.subject();

    expect(route).to.be.ok;
  });

  describe('functions', function () {
    it('returns data from handleProspectSuccess', function () {
      let data = {
          'data': [
            {
              'type': 'prospect',
              'id': '2',
              'attributes': {}
            }
          ]
        },
        result,
        route = this.subject();

      run(() => {
        result = route.handleProspectSuccess(data);
      });

      expect(result.get('id')).to.be.equal('2');
    });
    it('returns an error from handleProspectError', function () {
      let result,
        route = this.subject();

      result = route.handleProspectError();
      expect(result.fileError).to.be.ok;
    });
    it('returns a model from model', function () {
      let result,
        route = this.subject({
          handleProspectSuccess() {
            return 'model';
          }
        });

      result = route.model();
      result.then((data) => {
        expect(data).to.be.equal('model');
      });

    });
    it('returns an error from model with param', function () {
      let result,
        route = this.subject({
          handleProspectError() {
            return 'error';
          }
        });

      result = route.model({ name: 'tester' });
      result.then((data) => {
        expect(data).to.be.equal('error');
      });
    });
  });
});
