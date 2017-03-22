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
          <Link to="/" class="navbar-brand">Homepage</Link>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li><Link to="shine">Shine</Link></li>
            <li><Link to="knee">The Knee</Link></li>
            <li><a href="#">Wobble</a></li>
          </ul>
        </div>
      </nav>
    );
  }

}
