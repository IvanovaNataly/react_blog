import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Home.Component";
import PostsFeed from './PostsFeed.Component';
import Search from "./Search.Component";
import Filter from "./Filter.Component";

export default class PresentPostNavigation extends Component {

    render() {
        return (
           <div className="present-posts">
               <Route exact path="/" component={Home} />
               <Route exact path="/posts" component={PostsFeed} />
               <Route path="/posts/:reference" component={PostsFeed} />

               <aside className="col-md-4">
                   <Search/>
                   <Filter/>
               </aside>
           </div>

        )
    }
}
