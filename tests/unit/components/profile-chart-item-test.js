import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Component | profile chart item', function () {
  setupComponentTest('profile-chart-item', {
    // Specify the other units that are required for this test
    needs: ['component:tooltip-on-component', 'component:tether-tooltip-on-component'],
    unit: true
  });

  describe('computed', function () {
    it('returns data from tooltip based on percent & title', function () {
      let component = this.subject({
          percent: 100,
          title: 'Tests'
        }),
        result;

      result = component.get('tooltip');

      expect(result).to.be.equal('100% Tests');
    });
  });
  describe('functions', function () {
    beforeEach(function () {
      this.spy = sinon.spy();
    });

    it('calls percentObserver on didRender', function () {
      let component = this.subject({
        percent: 100,
        percentObserver: this.spy,
        title: 'Tests'
      });

      component.didRender();

      expect(this.spy.calledOnce).to.be.true;
    });
    it('sets width on percentObserver', function () {
      let component = this.subject();

      component.set('percent', '100');

      expect(component.get('percentWidth')).to.be.equal('99%');
    });
    it('sets width on percentObserver with width 0', function () {
      let component = this.subject();

      component.set('percent', '0');

      expect(component.get('percentWidth')).to.be.equal('1%');
    });
  });
});
