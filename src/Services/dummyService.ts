import { Link } from '../Models/Link';

export default {
  loadData: (): Link[] => [
    {
      url: 'https://redux.js.org/',
      title: 'Redux',
      description: 'A predictable state container for JavaScript apps.',
      imageUrl: 'https://redux.js.org/img/redux.svg',
      order: 0,
    },
    {
      url: 'https://reactjs.org/',
      title: 'React',
      description: 'A JavaScript library for building user interfaces',
      imageUrl: 'https://reactjs.org/logo-180x180.png',
      order: 1,
    },
    {
      url: 'https://twitter.com/home',
      title: 'Twitter',
      imageUrl:
        'https://abs.twimg.com/responsive-web/web/icon-ios.8ea219d4.png',
      order: 2,
    },
  ],
};
