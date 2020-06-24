import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ActionsType, SetBackground, LoadBackgroundImage } from '../action';
import { backgroundReducer, initialValue } from './backgroundReducer';
import { BackgroundImage } from '../../Models/BackgroundImage';
import { Service } from '../../Services/Service';
import { loadBackgroundImageResults } from '../../Services/dummyService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
 * Mock for Image element
 */
// @ts-ignore
global.Image = class {
  [x: string]: any;

  constructor() {
    setTimeout(() => {
      if (this.src === 'fail') {
        this.onerror(); // simulate error
      } else {
        this.onload(); // simulate success
      }
    }, 100);
  }
};

const jestImage1: BackgroundImage = {
  imageUrl: 'jest imageUrl 1',
  authorName: 'jest author name 1',
  authorUrl: 'jest author url 1',
  // additionnalInfo: '',
  // imageName: '',
  // imagePageUrl: '',
  // sourceName: '',
  // sourceUrl: ''
};

describe('Background Action', () => {
  it('should create SetBackground action', () => {
    expect(SetBackground(jestImage1)).toEqual({
      type: ActionsType.SetBackground,
      image: jestImage1,
    });
  });
});

describe('Background Reducer', () => {
  it('should handle initial state', () => {
    expect(backgroundReducer(undefined, {} as any)).toEqual(initialValue);
  });

  it('should handle SetBackground', () => {
    expect(backgroundReducer(undefined, SetBackground(jestImage1))).toEqual({
      image: jestImage1,
    });
  });
});

describe('Background Thunk', () => {
  let serviceCounter = 0;

  const service: Service = {
    loadData: () => Promise.resolve([]),
    loadBackgroundImage: () => {
      const image = loadBackgroundImageResults[serviceCounter];
      serviceCounter += 1;
      return Promise.resolve(image);
    },
  };

  beforeEach(() => {
    serviceCounter = 0;
    localStorage.clear();
  });

  it('should dispatch actions of LoadBackgroundImage', () => {
    expect.assertions(3);
    const image = loadBackgroundImageResults[0];
    const expectedActions = [SetBackground(image)];

    const store = mockStore(initialValue);

    return store.dispatch<any>(LoadBackgroundImage(service)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        'background-image',
        JSON.stringify(image)
      );
      // eslint-disable-next-line no-underscore-dangle
      expect(localStorage.__STORE__['background-image']).toBe(
        JSON.stringify(image)
      );
    });
  });

  it('should dispatch actions of LoadBackgroundImage with already existing image in cache', () => {
    expect.assertions(4);
    const image1 = loadBackgroundImageResults[0];
    const image2 = loadBackgroundImageResults[1];
    const expectedActions = [
      SetBackground(image1),
      SetBackground(image1),
      SetBackground(image2),
    ];
    const store = mockStore(initialValue);

    return store.dispatch<any>(LoadBackgroundImage(service)).then(() => {
      // eslint-disable-next-line no-underscore-dangle
      expect(localStorage.__STORE__['background-image']).toBe(
        JSON.stringify(image1)
      );

      return store.dispatch<any>(LoadBackgroundImage(service)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        expect(localStorage.setItem).toHaveBeenLastCalledWith(
          'background-image',
          JSON.stringify(image2)
        );
        // eslint-disable-next-line no-underscore-dangle
        expect(localStorage.__STORE__['background-image']).toBe(
          JSON.stringify(image2)
        );
      });
    });
  });

  it('should dispatch actions of LoadBackgroundImage with offline image', () => {
    expect.assertions(3);
    const image: BackgroundImage = {
      imageUrl: 'fail',
    } as BackgroundImage;

    const expectedActions: any[] = [];

    const store = mockStore(initialValue);
    const serviceFail: Service = {
      loadData: () => Promise.resolve([]),
      loadBackgroundImage: () => Promise.resolve(image),
    };

    return store.dispatch<any>(LoadBackgroundImage(serviceFail)).then(
      () => {},
      () => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        expect(localStorage.setItem).not.toHaveBeenLastCalledWith(
          'background-image',
          JSON.stringify(image)
        );
        // eslint-disable-next-line no-underscore-dangle
        expect(localStorage.__STORE__['background-image']).toBe(undefined);
      }
    );
  });
});
