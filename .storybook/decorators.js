import store from '../src/Redux/store';
import React from 'react';
import { LoadLinks, LoadData, LoadBackgroundImage } from '../src/Redux/action';
import dummyService from '../src/Services/dummyService';
import { Provider } from 'react-redux';
import { ServiceProvider } from '../src/Services/ServicesContext';

store.dispatch(LoadData(dummyService));
store.dispatch(LoadBackgroundImage(dummyService));

export const withProvider = story => (
  <Provider store={store}>
    <ServiceProvider value={dummyService}>{story()}</ServiceProvider>
  </Provider>
);
