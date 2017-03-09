import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {getPoke} from './util/api_util';
import {fetchPoke} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render( <Root store={store} />, rootEl);
});


window.getPoke = getPoke;
window.fetchPoke = fetchPoke;
