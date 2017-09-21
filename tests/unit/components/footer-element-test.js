import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | footer element', function () {
  setupComponentTest('footer-element', {
    // Specify the other units that are required for this test
    needs: ['component:match-rating'],
    unit: true
  });

  it('renders', function () {
    // creates the component instance
    let component = this.subject();

    // renders the component on the page
    this.render();
    expect(component).to.be.ok;
    expect(this.$()).to.have.length(1);
  });

  describe('computed', function () {
    it('returns true isHigh when matchPercent is high', function () {
      let component = this.subject({
        matchPercent: 75
      });

      expect(component.get('isHigh')).to.be.true;
    });
    it('returns false isHigh when matchPercent is not high', function () {
      let component = this.subject({
        matchPercent: 74
      });

      expect(component.get('isHigh')).to.be.false;
    });
    it('returns true isLow when matchPercent is low', function () {
      let component = this.subject({
        matchPercent: 49
      });

      expect(component.get('isLow')).to.be.true;
    });
    it('returns false isLow when matchPercent is not low', function () {
      let component = this.subject({
        matchPercent: 50
      });

      expect(component.get('isLow')).to.be.false;
    });
    it('returns true isMid when matchPercent is mid', function () {
      let component = this.subject({
        matchPercent: 50
      });

      expect(component.get('isMid')).to.be.true;
    });
    it('returns false isMid when matchPercent is not mid', function () {
      let component = this.subject({
        matchPercent: 49
      });

      expect(component.get('isMid')).to.be.false;
    });
  });
});
