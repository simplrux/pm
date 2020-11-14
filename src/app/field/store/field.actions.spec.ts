import * as fromField from './field.actions';

describe('loadFields', () => {
  it('should return an action', () => {
    expect(fromField.loadFields().type).toBe('[Field] Load Fields');
  });
});
