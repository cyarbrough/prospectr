import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | card info', function () {
  setupComponentTest('card-info', {
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
    it('returns different data from cardIcon based on isEmployer', function () {
      let component = this.subject(),
        result1, result2;

      result1 = component.get('cardIcon');
      component.set('isEmployer', true);
      result2 = component.get('cardIcon');

      expect(result1).to.not.be.equal(result2);
    });
    it('returns different data from subHeadline based on isEmployer', function () {
      let component = this.subject(),
        result1, result2;

      result1 = component.get('subHeadline');
      component.set('isEmployer', true);
      result2 = component.get('subHeadline');

      expect(result1).to.not.be.equal(result2);
    });
  });
});
