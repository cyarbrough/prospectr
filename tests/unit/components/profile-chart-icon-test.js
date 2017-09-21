import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | profile chart icon', function () {
  setupComponentTest('profile-chart-icon', {
    // Specify the other units that are required for this test
    needs: ['component:tooltip-on-element', 'component:tether-tooltip-on-element'],
    unit: true
  });

  describe('computed', function () {
    it('returns different data from iconName based on display', function () {
      let component = this.subject(),
        result1, result2;

      result1 = component.get('iconName');
      component.set('display', 'prospect');
      result2 = component.get('iconName');

      expect(result1).to.not.be.equal(result2);
    });
  });
  it('returns different data from tooltip based on display', function () {
    let component = this.subject(),
      result1, result2;

    result1 = component.get('tooltip');
    component.set('display', 'prospect');
    result2 = component.get('tooltip');

    expect(result1).to.not.be.equal(result2);
  });
});
