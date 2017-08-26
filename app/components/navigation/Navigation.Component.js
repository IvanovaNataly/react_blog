import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// import "app/assets/css/navigation.scss";

export default class Navigation extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <label >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </label>
            </button>
              <NavLink to="/" activeClassName="active" className="navbar-brand">Netcraft Academy</NavLink>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/posts" activeClassName="active">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/admin" activeClassName="active">Admin</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
