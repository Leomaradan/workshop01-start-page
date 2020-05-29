import { Link } from './Link';
import { DataStatus } from './DataStatus';

export interface LinkState {
  links: Link[];
  status: DataStatus;
}

export interface OptionState {
  editMode: boolean;
}

export interface State {
  links: LinkState;
  options: OptionState;
}
