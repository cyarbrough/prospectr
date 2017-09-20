import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | card skills', function() {
  setupComponentTest('card-skills', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#card-skills}}
    //     template content
    //   {{/card-skills}}
    // `);

    this.render(hbs`{{card-skills}}`);
    expect(this.$()).to.have.length(1);
  });
});
