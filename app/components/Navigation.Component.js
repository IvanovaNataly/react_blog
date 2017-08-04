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
                {/*for="toggle-nav-mobile"*/}
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </label>
            </button>
            <a className="navbar-brand" href="#/">Netcraft Academy</a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/posts" activeClassName="active">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/admin" activeClassName="active">Admin</NavLink>
              </li>
              {/**/}
                {/*<a href="#/posts">Posts</a>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<a href="#/admin">Admin</a>*/}
              {/*</li>*/}
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
