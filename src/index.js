import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { STORE } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
