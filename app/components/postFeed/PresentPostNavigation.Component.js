import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PostsFeed from './PostsFeed.Component';
import Search from "../sidebar/Search.Component";
import Filter from "../sidebar/Filter.Component";
// import Admin from "./Admin.Component";

export default class PresentPostNavigation extends Component {

    render() {
        return (
           <div className="present-posts">

               <Route exact path="/posts" component={PostsFeed} />
               <Route path="/posts/:reference" component={PostsFeed} />
               {/*<Route path="/admin" component={Admin}/>*/}
               <aside className="col-md-4">
                   <Search/>
                   <Filter/>
               </aside>
           </div>

        )
    }
}
