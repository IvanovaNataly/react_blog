import React, { Component } from 'react';
import { connect } from 'react-redux';
import postService from '../services/postService';
import PostPreview from './PostPreview.Component';
import Pager from './Pager.Component';
import { setPosts } from '../actions/actionCreators';


class PostsFeed extends Component {
    constructor() {
        super();
        //this.state =  {posts: []} ;
        this.onPosts();
        this.firstPost = 3;
        this.lastPost = 5;
    }


    onPosts () {
        postService
            .getPosts()
            .then( (response) => {return this.postSorting(response.posts)} )
            .then( (postToRepresent) =>  this.props.setPosts(postToRepresent))
      //(response) =>  this.props.setPosts(response.posts))
    }

    postSorting(posts) {
        let postToRepresent = [];

        for (let i = this.firstPost; i <= this.lastPost; i++) {
            postToRepresent.push(posts[i]);
        }
        this.firstPost = this.firstPost +3;
        this.lastPost = this.lastPost +3;
        return postToRepresent;
    }


    renderPreview(post, i) {
        return <li key={i}>
                    <PostPreview preview={post}/>
                </li>
    }

    render() {
        return(
            <section className="col-md-8">
                <h2 className="page-header">Showing
                    {/*<span> {this.props.match.params.page} </span>*/}
                    posts
                </h2>
                <ul className="posts-list">
                    {this.props.posts.map( this.renderPreview.bind(this) )}
                </ul>
                {/*<Pager/>*/}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

function mapDispatchToProps(dispatch) {
  return { setPosts: (posts) => dispatch( setPosts(posts) ) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsFeed)
