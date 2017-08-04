import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostsFeed from './PostsFeed.Component';
import Navigation from "./Navigation.Component";
import Admin from "./Admin.Component";
import Search from "./Search.Component";
import Filter from "./Filter.Component";


class Root extends Component {
  render() {
    return (

        <div className="container">
          <div className="row">
            <Navigation/>
            <Route path="/posts" component={PostsFeed} />
            <Route path="/posts/:author" component={PostsFeed} />
            <Route path="/admin" component={Admin}/>
            <aside className="col-md-4">
              <Search/>
              <Filter/>
            </aside>
          </div>
        </div>


    )
  }
}

export default Root;
