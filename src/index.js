import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import ErrorBoundary from './components/ErrorBoundary'
import GameStore from './stores/game'
import Routes, { routesStore } from './routes'

import './index.css';

const stores = {
  game: new GameStore(),
  routes: routesStore
}

ReactDOM.render(
  <ErrorBoundary>
    <Provider { ...stores}>
      <Routes />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);