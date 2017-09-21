import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | comparison row', function () {
  setupComponentTest('comparison-row', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#comparison-row}}
    //     template content
    //   {{/comparison-row}}
    // `);

    this.render(hbs`{{comparison-row}}`);
    expect(this.$()).to.have.length(1);
  });
});
