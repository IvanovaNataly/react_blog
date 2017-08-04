import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostsFeed from './PostsFeed.Component';
import Navigation from "./Navigation.Component";
import Admin from "./Admin.Component";
import Search from "./Search.Component";
import Filter from "./Filter.Component";
import { connect } from 'react-redux';
import { setPosts } from '../actions/actionCreators';

class Root extends Component {
  constructor(props){
    super(props);
    this.props.setPosts();
  }
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
function mapDispatchToProps(dispatch) {
  return { setPosts: (posts) => dispatch( setPosts(posts) ) }
}

export default connect(null, mapDispatchToProps)(Root)
