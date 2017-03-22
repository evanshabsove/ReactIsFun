import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Homepage from "./pages/Homepage"
// import Knee from "./pages/Knee"
import Layout from "./pages/Layout"
// import Shine from "./pages/Shine"
// import Wobble from "./pages/Wobble"

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homepage}></IndexRoute>
    </Route>
  </Router>
,app)

// <Route path="knee" component={Knee}></Route>
// <Route path="shine" component={Shine}></Route>
// <Route path="wobble" component={Wobble}></Route>
