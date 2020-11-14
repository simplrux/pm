import * as fromField from './field.reducer';
import { selectFieldState } from './field.selectors';

describe('Field Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFieldState({
      [fromField.fieldFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
