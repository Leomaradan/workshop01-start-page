import store from '../src/Redux/store';
import React from 'react';
import { LoadLinks } from '../src/Redux/action';
import dummyService from '../src/Services/dummyService';
import { Provider } from 'react-redux';

store.dispatch(LoadLinks(dummyService.loadData()));

export const withProvider = story => (
  <Provider store={store}>{story()}</Provider>
);
