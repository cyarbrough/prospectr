import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | card equipment', function () {
  setupComponentTest('card-equipment', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#card-equipment}}
    //     template content
    //   {{/card-equipment}}
    // `);

    this.render(hbs`{{card-equipment}}`);
    expect(this.$()).to.have.length(1);
  });
});
