import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Link } from '../../Models/Link';
import {
  LoadLinks,
  ActionsType,
  AddLink,
  RemoveLink,
  SetStatus,
  LoadData,
} from '../action';
import { linkReducer, initialValue } from './linkReducer';
import { DataStatus } from '../../Models/DataStatus';
import { LinkState } from '../../Models/State';
import dummyService, { loadDataResult } from '../../Services/dummyService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const jestLink1: Link = {
  imageUrl: 'jest imageUrl 1',
  order: 5,
  title: 'jest title 1',
  url: 'jest url 1',
};

const jestLink2: Link = {
  imageUrl: 'jest imageUrl 2',
  order: 6,
  title: 'jest title 2',
  url: 'jest url 2',
};

describe('Link Action', () => {
  it('should load links', () => {
    expect(LoadLinks([jestLink1])).toEqual({
      type: ActionsType.LoadLinks,
      links: [jestLink1],
    });
  });

  it('should add link', () => {
    expect(AddLink(jestLink1)).toEqual({
      type: ActionsType.AddLink,
      link: jestLink1,
    });
  });

  it('should remove link', () => {
    expect(RemoveLink(jestLink1.url)).toEqual({
      type: ActionsType.RemoveLink,
      url: jestLink1.url,
    });
  });

  it('should set status', () => {
    expect(SetStatus(DataStatus.Error)).toEqual({
      type: ActionsType.SetStatus,
      status: DataStatus.Error,
    });
  });
});

describe('Link Reducer', () => {
  it('should handle initial state', () => {
    expect(linkReducer(undefined, {} as any)).toEqual(initialValue);
  });

  it('should handle LoadLinks action', () => {
    expect(linkReducer(undefined, LoadLinks([jestLink1]))).toEqual({
      links: [jestLink1],
      status: DataStatus.Loaded,
    });
  });

  it('should handle AddLink action', () => {
    const state: LinkState = {
      links: [jestLink2],
      status: DataStatus.Loaded,
    };

    const link1 = { ...jestLink1, order: 0 };
    const link2 = { ...jestLink1, order: 1 };

    expect(linkReducer(undefined, AddLink(jestLink1))).toMatchObject({
      links: [link1],
    });

    expect(linkReducer(state, AddLink(jestLink1))).toMatchObject({
      links: [jestLink2, link2],
    });
  });

  it('should handle AddLink action if the url already exists', () => {
    const state: LinkState = {
      links: [jestLink1],
      status: DataStatus.Loaded,
    };

    expect(linkReducer(state, AddLink(jestLink1))).toMatchObject({
      links: [jestLink1],
    });
  });

  it('should handle RemoveLink action', () => {
    const state1: LinkState = {
      links: [jestLink1],
      status: DataStatus.Loaded,
    };

    const state2: LinkState = {
      links: [jestLink1, jestLink2],
      status: DataStatus.Loaded,
    };

    expect(linkReducer(undefined, RemoveLink(jestLink1.url))).toMatchObject({
      links: [],
    });

    expect(linkReducer(state1, RemoveLink(jestLink1.url))).toMatchObject({
      links: [],
    });

    expect(linkReducer(state1, RemoveLink(jestLink2.url))).toMatchObject({
      links: [jestLink1],
    });

    expect(linkReducer(state2, RemoveLink(jestLink1.url))).toMatchObject({
      links: [jestLink2],
    });
  });

  it('should handle SetStatus action', () => {
    expect(linkReducer(undefined, LoadLinks([jestLink1]))).toMatchObject({
      links: [jestLink1],
      status: DataStatus.Loaded,
    });
  });
});

describe('Link Thunk', () => {
  it('should dispatch actions of Load Data with dummy service', () => {
    const expectedActions = [
      SetStatus(DataStatus.Loading),
      LoadLinks(loadDataResult),
    ];

    const store = mockStore(initialValue);

    return store.dispatch<any>(LoadData(dummyService)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
