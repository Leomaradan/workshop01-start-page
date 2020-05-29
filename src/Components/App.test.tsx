import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../Redux/store';
import { LoadLinks } from '../Redux/action';
import dummyService from '../Services/dummyService';

describe('App', () => {

  let component: React.ReactElement;

  beforeEach(() => {
    store.dispatch(LoadLinks(dummyService.loadData()));

    component = <Provider store={store}><App /></Provider>;
  });

  it('should renders header', () => {
    const { getByText } = render(component);
    const linkElement = getByText(/header/i);
    expect(linkElement).toBeInTheDocument();
  });
});
