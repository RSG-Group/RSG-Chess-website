import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Docs from "./pages/Docs";
import Download from "./pages/Download";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/play" component={Play} />
      <Route path="/download" component={Download} />
      <Route path="/docs" component={Docs}>
        <Route path="/docs(/:project)(/:page)" component={Docs} />
      </Route>
    </Route>
  </Router>,
  document.querySelector("#root")
);

registerServiceWorker();
