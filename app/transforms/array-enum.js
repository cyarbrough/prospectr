import DS from 'ember-data';
import Enum from 'ember-enum/enum';

export default DS.Transform.extend({
  deserialize(serialized, { options = [], defaultValue = null } = {}) {
    return Enum.create({
      values: serialized || defaultValue,
      options
    });
  },

  serialize(deserialized) {
    return deserialized;
  }
});
