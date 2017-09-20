import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Transform | array enum', function () {
  setupTest('transform:array-enum', {
    // Specify the other units that are required for this test.
    // needs: ['transform:foo']
  });

  // Replace this with your real tests.
  it('exists', function () {
    let transform = this.subject();

    expect(transform).to.be.ok;
  });

  describe('functions', function () {
    it('serializes', function () {
      let result,
        transform = this.subject();

      result = transform.serialize('test');

      expect(result).to.be.equal('test');
    });
    it('deserializes', function () {
      let result,
        transform = this.subject();

      result = transform.deserialize(['test1'], { options: ['test1', 'test2'] });

      expect(result.values[0]).to.be.equal('test1');
      expect(result.options[1]).to.be.equal('test2');
    });
    it('returns null on deserialize', function () {
      let result,
        transform = this.subject();

      result = transform.deserialize(null);

      expect(result.values).to.be.null;
    });
  });
});
