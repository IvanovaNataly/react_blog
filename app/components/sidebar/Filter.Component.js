import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const cl = console.log;

class Filter extends Component {

    filterCount(arr) {
        return arr.reduce(function (prev, next) {
            prev[next] = (prev[next] + 1) || 1;
            return prev;
        }, {});
    }

    filterTags() {
        if(this.props.posts.length > 0) {
        let filter = [];
        this.props.posts.map( post => {
            post.tags.map (tag => {
            filter.push(tag);
        })
    })

    let filterObj = this.filterCount(filter.sort());

    let filters = Object.keys(filterObj).map((key, i) => {
        let reference = key.replace(" ", "-").toLowerCase();
        return (
            <Link to={{ pathname: '/posts', search: `?topic=${reference}` }} className="list-group-item" key={i} >
                <span className="badge">{filterObj[key]}</span>
                {key}
            </Link>
        )
        })
        return filters;
        }
    }

    filterAuthor() {
        if(this.props.posts.length > 0) {
            let filter = [];
            this.props.posts.map( post => {
                filter.push(post.author);
            })

            let filterObj = this.filterCount(filter.sort());

            let filters = Object.keys(filterObj).map((key, i) => {
                let reference = key.replace(" ", "-").toLowerCase();
                return (
                <Link to={{ pathname: '/posts', search: `?author=${reference}` }} className="list-group-item" key={i} >
                    <span className="badge">{filterObj[key]}</span>
                    {key}
                </Link>
            )
            })
            return filters;
        }
    }


    render() {
        return (
            <div className="well">
                <h3>Filter Posts</h3>

            <div className="list-group">
                <NavLink to="/posts" className="list-group-item" activeClassName="active">
                    <span className="badge">{this.props.posts.length}</span>
                    Show All Posts
                </NavLink>
            </div>

            <h4><small className="glyphicon glyphicon-tag"></small> Category</h4>
                <div className="list-group">
                {this.filterTags()}
            </div>

            <h4><small className="glyphicon glyphicon-user"></small> Author</h4>
                <div className="list-group">
                {this.filterAuthor()}
            </div>

            <h4><small className="glyphicon glyphicon-time"></small> Month</h4>
            <div className="list-group">
                <div>
                    <span className="list-group-item disabled">
                        2015
                    </span>
                    <a href="#" className="list-group-item">
                        <span className="badge">4</span>
                        January
                    </a>
                </div>
                <div>
                    <span className="list-group-item disabled">
                        2014
                    </span>
                    <a href="#" className="list-group-item">
                        <span className="badge">4</span>
                        December
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, null)(Filter);


/*    <NavLink to={`/posts/${reference}`} className="list-group-item" key={i} activeClassName="active">
 <span className="badge">{filterObj[key]}</span>
 {key}
 </NavLink>*/


