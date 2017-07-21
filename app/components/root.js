import React, { Component } from 'react';
import PostsFeed from './PostsFeed.Component';
import { Router, Route } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <div className="row">
          <Route path="/:page" component={PostsFeed}/>
        </div>

      </div>
      </Router>

    )
  }
}

export default Root;
