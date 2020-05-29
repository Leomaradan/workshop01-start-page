import { OptionState } from '../../Models/State';
import { OptionsActions } from '../action';

export const initialValue: OptionState = {
  editMode: false,
};

export const optionReducer = (
  state: OptionState = initialValue,
  action: OptionsActions
) => {
  switch (action?.type) {
    default:
      return state;
  }
};
