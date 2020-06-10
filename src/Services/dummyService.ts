import { Link } from '../Models/Link';

export default {
  loadData: (): Link[] => [
    {
      url: 'https://www.reddit.com/',
      title: 'Reddit',
      imageUrl: 'https://www.redditstatic.com/icon.png',
      order: 3,
    },
    {
      url: 'https://pinetools.com/',
      title: 'PineTools',
      imageUrl:
        'https://pbs.twimg.com/profile_images/731565037177950212/SHqks79q_400x400.jpg',
      order: 4,
    },
    {
      url: 'https://github.com/',
      title: 'GitHub',
      imageUrl:
        'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
      description:
        'GitHub is where people build software. More than 50 million people use GitHub to discover, fork, and contribute to over 100 million projects.',
      order: 5,
    },
    {
      url: 'https://css-tricks.com/',
      title: 'CSS-Tricks',
      imageUrl: 'https://css-tricks.com/apple-touch-icon.png',
      description:
        'Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.',
      order: 6,
    },
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
