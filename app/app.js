// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'assets/css/main.scss';

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
//import {BrowserRouter} from "react-router-dom";

import Root  from './components/root';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#root')
);
