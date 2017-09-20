import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | card specifications', function () {
  setupComponentTest('card-specifications', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#card-specification}}
    //     template content
    //   {{/card-specification}}
    // `);

    this.render(hbs`{{card-specification}}`);
    expect(this.$()).to.have.length(1);
  });
});
