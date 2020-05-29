import { ActionsType, ToggleEditMode } from '../action';
import { optionReducer, initialValue } from './optionReducer';

describe('Option Action', () => {
  it('should toggle edit mode', () => {
    expect(ToggleEditMode()).toEqual({
      type: ActionsType.ToggleEditMode,
    });
  });
});

describe('Option Reducer', () => {
  it('should handle initial state', () => {
    expect(optionReducer(undefined, {} as any)).toEqual(initialValue);
  });
});
