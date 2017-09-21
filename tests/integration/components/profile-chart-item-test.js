import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | profile chart item', function () {
  setupComponentTest('profile-chart-item', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#profile-chart-item}}
    //     template content
    //   {{/profile-chart-item}}
    // `);

    this.render(hbs`{{profile-chart-item}}`);
    expect(this.$()).to.have.length(1);
  });
});
