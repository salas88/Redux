import { createStore } from 'redux';
import reducer from './reducer';

import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';

const store = createStore(reducer);

  
  ReactDom.render(
    <Provider store = { store }>
      <App />
    </Provider>,
    document.getElementById('root'));
    
