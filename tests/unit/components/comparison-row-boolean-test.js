import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | comparison row boolean', function () {
  setupComponentTest('comparison-row-boolean', {
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
    it('returns different data from iconName based on data', function () {
      let component = this.subject(),
        result1, result2;

      result1 = component.get('iconName');
      component.set('data', 'title');
      result2 = component.get('iconName');

      expect(result1).to.not.be.equal(result2);
    });
  });
});
