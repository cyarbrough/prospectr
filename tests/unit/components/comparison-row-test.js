import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | comparison row', function () {
  setupComponentTest('comparison-row', {
    // Specify the other units that are required for this test
    needs: ['component:comparison-row-string', 'component:comparison-row-boolean'],
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
    it('returns different data from classType based on displayType', function () {
      let component = this.subject(),
        result1, result2;

      result1 = component.get('classType');
      component.set('displayType', 'title');
      result2 = component.get('classType');

      expect(result1).to.not.be.equal(result2);
    });
    it('returns default from classType', function () {
      let component = this.subject(),
        result;

      result = component.get('classType');

      expect(result).to.be.ok;
    });
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
    it('returns comparison-row-boolean from displayComponent', function () {
      let component = this.subject({
          displayType: 'boolean'
        }),
        result;

      result = component.get('displayComponent');

      expect(result).to.be.equal('comparison-row-boolean');
    });
    it('returns comparison-row-chart from displayComponent', function () {
      let component = this.subject({
          displayType: 'chart'
        }),
        result;

      result = component.get('displayComponent');

      expect(result).to.be.equal('comparison-row-chart');
    });
    it('returns comparison-row-string from displayComponent', function () {
      let component = this.subject(),
        result;

      result = component.get('displayComponent');

      expect(result).to.be.equal('comparison-row-string');
    });
  });
});
