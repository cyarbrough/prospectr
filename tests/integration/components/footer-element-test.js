import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | footer element', function () {
  setupComponentTest('footer-element', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#footer-element}}
    //     template content
    //   {{/footer-element}}
    // `);

    this.render(hbs`{{footer-element}}`);
    expect(this.$()).to.have.length(1);
  });
});
