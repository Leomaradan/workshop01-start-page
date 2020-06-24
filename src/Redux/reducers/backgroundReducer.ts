import { BackgroundState } from '../../Models/State';

import { BackgroundActions, ActionsType } from '../action';

export const initialValue: BackgroundState = {
  image: null,
};

export const backgroundReducer = (
  state: BackgroundState = initialValue,
  action: BackgroundActions
) => {
  switch (action?.type) {
    case ActionsType.SetBackground:
      return { ...state, image: action.image };
    default:
      return state;
  }
};
