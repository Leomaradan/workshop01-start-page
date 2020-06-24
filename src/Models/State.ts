import { Link } from './Link';
import { DataStatus } from './DataStatus';
import { BackgroundImage } from './BackgroundImage';

export interface LinkState {
  links: Link[];
  status: DataStatus;
}

export interface OptionState {
  editMode: boolean;
}

export interface BackgroundState {
  image: BackgroundImage | null;
}

export interface State {
  links: LinkState;
  options: OptionState;
  background: BackgroundState;
}
