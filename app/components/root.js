import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import {withRouter} from "react-router";

import { setPosts } from '../actions/actionCreators';
import PostsFeed from './PostsFeed.Component';
import Navigation from "./Navigation.Component";
import Admin from "./Admin.Component";
import Search from "./Search.Component";
import Filter from "./Filter.Component";
import Home from "./Home.Component";
import PostPage from "./PostPage.Component";

class Root extends Component {
    constructor(props){
        super(props);
        this.props.setPosts();
    }
    render() {
        return (

        <div className="container">
            <Navigation/>

            <div className="row">

                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={PostsFeed} />
                <Route path="/posts/:reference" component={PostsFeed} />
                <Route path="/admin" component={Admin}/>
                <Route path="/article/:title" component={PostPage}/>


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

export default withRouter(connect(null, mapDispatchToProps)(Root))
