import { Action } from 'redux';
import { Link } from '../Models/Link';
import { DataStatus } from '../Models/DataStatus';
import { BackgroundImage } from '../Models/BackgroundImage';
import { Service } from '../Services/Service';

export enum ActionsType {
  LoadLinks = 'LoadLinks',
  AddLink = 'AddLink',
  RemoveLink = 'RemoveLink',
  SetStatus = 'SetStatus',
  ToggleEditMode = 'ToggleEditMode',
  SetBackground = 'SetBackground',
}

export type LoadLinksAction = Action<ActionsType.LoadLinks> & { links: Link[] };
export type AddLinkAction = Action<ActionsType.AddLink> & {
  link: Omit<Link, 'order'>;
};
export type RemoveLinkAction = Action<ActionsType.RemoveLink> & { url: string };
export type SetStatusAction = Action<ActionsType.SetStatus> & {
  status: DataStatus;
};

export type ToggleEditModeAction = Action<ActionsType.ToggleEditMode>;

export type SetBackgroundAction = Action<ActionsType.SetBackground> & {
  image: BackgroundImage;
};

export type LinksActions =
  | LoadLinksAction
  | AddLinkAction
  | RemoveLinkAction
  | SetStatusAction;
export type OptionsActions = ToggleEditModeAction;

export type BackgroundActions = SetBackgroundAction;

export const LoadLinks = (links: Link[]): LoadLinksAction => ({
  type: ActionsType.LoadLinks,
  links,
});

export const AddLink = (link: Omit<Link, 'order'>): AddLinkAction => ({
  type: ActionsType.AddLink,
  link,
});

export const RemoveLink = (url: string): RemoveLinkAction => ({
  type: ActionsType.RemoveLink,
  url,
});

export const SetStatus = (status: DataStatus): SetStatusAction => ({
  type: ActionsType.SetStatus,
  status,
});

export const ToggleEditMode = (): ToggleEditModeAction => ({
  type: ActionsType.ToggleEditMode,
});

export const SetBackground = (image: BackgroundImage): SetBackgroundAction => ({
  type: ActionsType.SetBackground,
  image,
});

export const LoadData = (service: Service) => {
  return (dispatch: any) => {
    dispatch(SetStatus(DataStatus.Loading));

    return service.loadData().then(data => {
      dispatch(LoadLinks(data));
    });
  };
};

export const LoadBackgroundImage = (service: Service) => {
  return (dispatch: any) => {
    const inCacheImage = localStorage.getItem('background-image');

    if (inCacheImage) {
      dispatch(SetBackground(JSON.parse(inCacheImage)));
    }

    return service.loadBackgroundImage().then(data => {
      return new Promise((resolve, reject) => {
        const loader = new Image();

        loader.onload = () => {
          dispatch(SetBackground(data));
          localStorage.setItem('background-image', JSON.stringify(data));
          resolve();
        };

        loader.onerror = () => {
          reject(new Error(`Image ${data.imageUrl} cannot be loaded.`));
        };

        loader.src = data.imageUrl;
      });
    });
  };
};
