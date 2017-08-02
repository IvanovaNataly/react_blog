import React, { Component } from 'react';
import PostsFeed from './PostsFeed.Component';
import { Router, Route } from "react-router-dom";

class Root extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">

          <PostsFeed/>
        </div>

      </div>


    )
  }
}

export default Root;
