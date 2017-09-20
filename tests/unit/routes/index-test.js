import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';
const { run } = Ember;

describe('Unit | Route | index', function () {
  setupTest('route:index', {
    // Specify the other units that are required for this test.
    needs: ['service:ajax', 'model:job']
  });

  it('exists', function () {
    let route = this.subject();

    expect(route).to.be.ok;
  });

  describe('functions', function () {
    it('returns data from handleJobSuccess', function () {
      let data = {
          'data': [
            {
              'type': 'job',
              'id': '1',
              'attributes': {}
            }
          ]
        },
        result,
        route = this.subject();

      run(() => {
        result = route.handleJobSuccess(data);
      });

      expect(result.get('id')).to.be.equal('1');
    });
    it('returns a model from model', function () {
      let result,
        route = this.subject({
          ajax: {
            request() {
              return {
                then(functionData) {
                  return functionData();
                }
              };
            }
          },
          handleJobSuccess() {
            return 'model';
          }
        });

      result = route.model();
      expect(result).to.be.equal('model');
    });
  });
});
