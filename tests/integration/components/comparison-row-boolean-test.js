import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | comparison row boolean', function () {
  setupComponentTest('comparison-row-boolean', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#comparison-row-boolean}}
    //     template content
    //   {{/comparison-row-boolean}}
    // `);

    this.render(hbs`{{comparison-row-boolean}}`);
    expect(this.$()).to.have.length(1);
  });
});
