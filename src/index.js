import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';
import DevTools from "./DevTools";

ReactDOM.render(
  <Provider store={store}>
    <DevTools />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
