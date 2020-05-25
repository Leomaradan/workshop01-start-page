import { LinkState } from "../../Models/State";
import { ActionsType, LinksActions } from "../action";
import { DataStatus } from "../../Models/DataStatus";

export const initialValue: LinkState = {
    links: [],
    status: DataStatus.Unloaded,
}

export const linkReducer = (state: LinkState = initialValue, action: LinksActions) => {
    switch (action?.type) {
        case ActionsType.LoadLinks:
            return { links: action.links, status: DataStatus.Loaded };

        case ActionsType.AddLink:
            const existingItem = state.links.find(l => l.url === action.link.url);

            if (existingItem) {
                const newItem = { ...existingItem };
                newItem.title = action.link.title;
                newItem.description = action.link.description;
                newItem.imageUrl = action.link.imageUrl;

                return { ...state, links: [...state.links.filter(l => l.url !== action.link.url), newItem] };
            }

            const order = state.links.length + 1;
            return { ...state, links: [...state.links, { ...action.link, order }] };

        case ActionsType.RemoveLink:
            return { ...state, links: state.links.filter(l => l.url !== action.url) };

        case ActionsType.SetStatus:
            return { ...state, status: action.status}
        default:
            return state;
    }
}