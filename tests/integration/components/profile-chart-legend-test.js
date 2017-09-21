import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | profile chart legend', function () {
  setupComponentTest('profile-chart-legend', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#profile-chart-legend}}
    //     template content
    //   {{/profile-chart-legend}}
    // `);

    this.render(hbs`{{profile-chart-legend}}`);
    expect(this.$()).to.have.length(1);
  });
});
