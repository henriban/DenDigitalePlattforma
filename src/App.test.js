import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Main from './components/mainComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});
