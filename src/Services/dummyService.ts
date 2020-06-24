import { Link } from '../Models/Link';
import image1906 from '../Assets/images/IMG_1906-Modifier.png';
import image2081 from '../Assets/images/IMG_2081.png';
import image2087 from '../Assets/images/IMG_2087-Modifier.png';
import { BackgroundImage } from '../Models/BackgroundImage';
import { Service } from './Service';

export const loadDataResult: Link[] = [
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
    imageUrl: 'https://abs.twimg.com/responsive-web/web/icon-ios.8ea219d4.png',
    order: 2,
  },
];

const loadBackgroundImageResults: BackgroundImage[] = [
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/5970127767/',
    imageUrl: 'https://live.staticflickr.com/6012/5970127767_24a7c1232e_o.jpg',
    additionnalInfo: 'Kyoto, Japon',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/15276120300/',
    imageUrl: 'https://live.staticflickr.com/3930/15276120300_2f554d7e65_o.jpg',
    additionnalInfo: 'Kyoto, Japon',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/15439704376/',
    imageUrl: 'https://live.staticflickr.com/5600/15439704376_9b64f21d6c_o.jpg',
    additionnalInfo: 'Miyajima, Japon',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/15462338432/',
    imageUrl: 'https://live.staticflickr.com/3936/15462338432_8a028b968b_o.jpg',
    additionnalInfo: 'Tokyo, Japon',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/8306292879/',
    imageUrl: 'https://live.staticflickr.com/8492/8306292879_ca0d123fd8_o.jpg',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/8307332448/',
    imageUrl: 'https://live.staticflickr.com/8215/8307332448_ba419e2c8e_o.jpg',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/37857904212/',
    imageUrl: image1906,
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/24037100428/',
    imageUrl: image2087,
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/37888913951/',
    imageUrl: image2081,
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/36802098244/',
    additionnalInfo: 'Neuchâtel, Suisse',
    imageUrl: 'https://live.staticflickr.com/4473/36802098244_b1197fff79_o.jpg',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/23180668313/',
    imageName: 'Sunrise on cloud sea',
    imageUrl: 'https://live.staticflickr.com/642/23180668313_3684717efd_o.jpg',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/23476567441/',
    imageName: 'Ghosts of Neuchâtel',
    additionnalInfo: 'Neuchâtel, Suisse',
    imageUrl: 'https://live.staticflickr.com/5763/23476567441_0064cb5a90_o.jpg',
  },
  {
    authorName: 'Léo Maradan',
    authorUrl: 'https://www.flickr.com/photos/leomaradan/',
    imagePageUrl: 'https://www.flickr.com/photos/leomaradan/16413997080/',
    imageName: 'Le calme pendant la tempête',
    additionnalInfo: 'Neuchâtel, Suisse',
    imageUrl: 'https://live.staticflickr.com/7345/16413997080_920f1c8dab_o.jpg',
  },
];

export const loadBackgroundImageSingleResult = () =>
  loadBackgroundImageResults
    .sort(() => Math.random() - 0.5)
    .find(() => true) as BackgroundImage;

const dummyService: Service = {
  loadData: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(loadDataResult);
      }, 1000);
    }),
  loadBackgroundImage: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(loadBackgroundImageSingleResult());
      }, 5000);
    }),
};

export default dummyService;
