import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | card methodology', function() {
  setupComponentTest('card-methodology', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#card-methodology}}
    //     template content
    //   {{/card-methodology}}
    // `);

    this.render(hbs`{{card-methodology}}`);
    expect(this.$()).to.have.length(1);
  });
});
