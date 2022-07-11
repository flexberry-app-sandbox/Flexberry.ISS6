import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s6-оборудование', 'Unit | Model | i-i-s-i-s-s6-оборудование', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-s-s6-оборудование',
    'model:i-i-s-i-s-s6-пользователь',
    'model:i-i-s-i-s-s6-рабочее-место',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
