import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | comparison line', function () {
  setupComponentTest('comparison-line', {
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
    it('returns different data from classTitle based on title', function () {
      let component = this.subject(),
        result1, result2;

      result1 = component.get('classTitle');
      component.set('title', 'title');
      result2 = component.get('classTitle');

      expect(result1).to.not.be.equal(result2);
    });
    it('returns clean css name from classTitle', function () {
      let component = this.subject({
          title: 'Testing Name :'
        }),
        result;

      result = component.get('classTitle');

      expect(result).to.not.be.equal('testing-name');
    });
  });
});
