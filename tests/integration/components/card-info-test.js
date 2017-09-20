import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | card info', function () {
  setupComponentTest('card-info', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#info-card}}
    //     template content
    //   {{/info-card}}
    // `);

    this.render(hbs`{{card-info}}`);
    expect(this.$()).to.have.length(1);
  });
});
