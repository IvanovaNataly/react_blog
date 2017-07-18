import React, { Component } from 'react';
import PostsFeed from './PostsFeed';

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
