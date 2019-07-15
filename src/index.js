import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // Part of creating the store. 
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import counter from './reducers';

//  This creates the store which is passed to the provider below. 
const store = createStore(counter); // Counter is the reducer function. 

// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also
// where the store "lives".
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
