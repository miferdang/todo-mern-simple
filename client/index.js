/* global document */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import MainComp from './components/main';
import Store from './redux/store';
require('./main.css');

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <MainComp />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/main', () => { renderApp(); });
};
