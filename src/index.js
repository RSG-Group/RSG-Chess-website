import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "./index.css";
import App from "./App";
import Play from "./pages/Play";
import Home from "./pages/Home";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/play" component={Play} />
    </Route>
  </Router>,
  document.querySelector("#root")
);

registerServiceWorker();
