import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store';
import { ServiceProvider } from './Services/ServicesContext';
import dummyService from './Services/dummyService';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ServiceProvider value={dummyService}>
        <App />
      </ServiceProvider>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
