import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {

    const navbar = {
      marginBottom: "0",
      position: "absolute",
      width: "100%",
      zIndex: "10",
      borderRadius: "0"
    }

    return(
      <nav class="navbar navbar-default" style={navbar}>
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
