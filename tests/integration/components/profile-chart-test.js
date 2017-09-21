import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | profile chart', function () {
  setupComponentTest('profile-chart', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#profile-chart}}
    //     template content
    //   {{/profile-chart}}
    // `);

    this.render(hbs`{{profile-chart}}`);
    expect(this.$()).to.have.length(1);
  });
});
