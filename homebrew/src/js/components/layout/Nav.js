import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {
    return(
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="../Homepage/index.html">Evan Homebrews</a>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Shine</a></li>
            <li><a href="#">The Knee</a></li>
            <li><a href="#">Wobble</a></li>
          </ul>
        </div>
      </nav>
    );
  }

}
