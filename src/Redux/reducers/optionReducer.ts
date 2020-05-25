import { LinkState, OptionState } from "../../Models/State";
import { ActionsType, OptionsActions } from "../action";

export const initialValue: OptionState = {
    editMode: false
}

export const optionReducer = (state: OptionState = initialValue, action: OptionsActions) => {
    switch (action?.type) {
        default:
            return state;
    }
}