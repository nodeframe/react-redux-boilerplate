import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./app', () => {
      const NewApp = require('./app').default;
      ReactDOM.render(
        <NewApp />,
        document.getElementById('root')
      );
    });
}
