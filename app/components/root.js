import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import {withRouter} from "react-router";

import { setPosts } from '../actions/actionCreators';
import PostsFeed from './postFeed/PostsFeed.Component';
import Navigation from "./navigation/Navigation.Component";
import Admin from "./admin/Admin.Component";
import Search from "./sidebar/Search.Component";
import Filter from "./sidebar/Filter.Component";
import Home from "./home/Home.Component";
import PostPage from "./postFeed/PostPage.Component";
import PresentPostNavigation from "./postFeed/PresentPostNavigation.Component";
import EditPost from "./admin/EditPost.Component";

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
                <Route path="/admin" component={Admin}/>
                <Route path="/posts" component={PresentPostNavigation} />
                <Route path="/article/:title" component={PostPage}/>
                <Route path="/add-post" component={EditPost}/>
                <Route path="/edit-post" component={EditPost}/>
            </div>
        </div>


        )
    }
}
function mapDispatchToProps(dispatch) {
    return { setPosts: (posts) => dispatch( setPosts(posts) ) }
}

export default withRouter(connect(null, mapDispatchToProps)(Root))
