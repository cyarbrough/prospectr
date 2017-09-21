import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | comparison row chart', function () {
  setupComponentTest('comparison-row-chart', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
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
    it('returns true from isNone when data is None', function () {
      let component = this.subject();

      expect(component.get('isNone')).to.be.true;
    });
    it('returns false from isNone when data is not None', function () {
      let component = this.subject({
        data: 'Test'
      });

      expect(component.get('isNone')).to.be.false;
    });
    it('returns true from isFamiliar when data is Familiar', function () {
      let component = this.subject({
        data: 'Familiar'
      });

      expect(component.get('isFamiliar')).to.be.true;
    });
    it('returns false from isFamiliar when data is not Familiar', function () {
      let component = this.subject();
      
      expect(component.get('isFamiliar')).to.be.false;
    });
    it('returns true from isGood when data is Good', function () {
      let component = this.subject({
        data: 'Good'
      });

      expect(component.get('isGood')).to.be.true;
    });
    it('returns false from isGood when data is not Good', function () {
      let component = this.subject();
      
      expect(component.get('isGood')).to.be.false;
    });
    it('returns true from isExpert when data is Expert', function () {
      let component = this.subject({
        data: 'Expert'
      });

      expect(component.get('isExpert')).to.be.true;
    });
    it('returns false from isExpert when data is not Expert', function () {
      let component = this.subject();
      
      expect(component.get('isExpert')).to.be.false;
    });
  });
});
