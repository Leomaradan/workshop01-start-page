import { BackgroundImage } from '../Models/BackgroundImage';
import { Link } from '../Models/Link';

export interface Service {
  loadData(): Promise<Link[]>;
  loadBackgroundImage(): Promise<BackgroundImage>;
}

export const emptyService: Service = {
  loadData: () => Promise.reject(new Error('Service Provider not configured.')),
  loadBackgroundImage: () =>
    Promise.reject(new Error('Service Provider not configured.')),
};
