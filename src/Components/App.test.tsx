import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../Redux/store';
import { LoadLinks } from '../Redux/action';
import dummyService, { loadDataResult } from '../Services/dummyService';
import { ServiceProvider } from '../Services/ServicesContext';

describe('App', () => {

  let component: React.ReactElement;

  beforeEach(() => {
    store.dispatch(LoadLinks(loadDataResult));

    component = <Provider store={store}><ServiceProvider value={dummyService}><App /></ServiceProvider></Provider>;
  });

  it('should renders header', () => {
    const { getByText } = render(component);
    const linkElement = getByText(/[0-9]{2}:[0-9]{2}/i);
    expect(linkElement).toBeInTheDocument();
  });
});
