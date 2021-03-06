import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | comparison row string', function () {
  setupComponentTest('comparison-row-string', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#comparison-row-string}}
    //     template content
    //   {{/comparison-row-string}}
    // `);

    this.render(hbs`{{comparison-row-string}}`);
    expect(this.$()).to.have.length(1);
  });
});
