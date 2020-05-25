import { Link } from "../Models/Link";
import { Action } from "redux";
import { dummyService } from "../Services/dummyService";
import { DataStatus } from "../Models/DataStatus";

export enum ActionsType {
    LoadLinks = 'LoadLinks',
    AddLink = 'AddLink',
    RemoveLink = 'RemoveLink',
    SetStatus = 'SetStatus',
    ToggleEditMode = 'ToggleEditMode',
}

export type LoadLinksAction = Action<ActionsType.LoadLinks> & {links: Link[]};
export type AddLinkAction = Action<ActionsType.AddLink> & {link: Omit<Link, 'order'>};
export type RemoveLinkAction = Action<ActionsType.RemoveLink> & {url: string};
export type SetStatusAction = Action<ActionsType.SetStatus> & {status: DataStatus};

export type ToggleEditModeAction = Action<ActionsType.ToggleEditMode>;

export type LinksActions = LoadLinksAction | AddLinkAction | RemoveLinkAction | SetStatusAction;
export type OptionsActions = ToggleEditModeAction

export const LoadLinks = (links: Link[]): LoadLinksAction => ({
    type: ActionsType.LoadLinks,
    links
});

export const AddLink = (link: Omit<Link, 'order'>): AddLinkAction => ({
    type: ActionsType.AddLink,
    link
});

export const RemoveLink = (url: string): RemoveLinkAction => ({
    type: ActionsType.RemoveLink,
    url
});

export const SetStatus = (status: DataStatus): SetStatusAction => ({
    type: ActionsType.SetStatus,
    status
});

export const ToggleEditMode = (): ToggleEditModeAction => ({
    type: ActionsType.ToggleEditMode,
});

export const LoadData = () => {
    return (dispatch: any) => {
        dispatch(SetStatus(DataStatus.Loading));
        
        setTimeout(() => {
            const data = dummyService.loadData();
            dispatch(LoadLinks(data));
          }, 1000);
    }
}
