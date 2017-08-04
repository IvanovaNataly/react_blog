import React, { Component } from 'react';
import { connect } from 'react-redux';
import postService from '../services/postService';
import PostPreview from './PostPreview.Component';
import Pager from './Pager.Component';
import { setPosts } from '../actions/actionCreators';


class PostsFeed extends Component {
    constructor(props) {
        super(props);
        this.firstPost = 0;
        this.lastPost = 2;


        // if (props.match.params.author)
        //   postService
        //     .getFilteredPosts(props.match.params.author)
        //     .then( (response) => {return this.postSorting(response.posts)} )
        //     .then( (postToRepresent) =>  this.props.setPosts(postToRepresent))
    }

    // componentWillReceiveProps({match}) {
    //     if(match.params.author)
    //       postService
    //         .getFilteredPosts(props.match.params.author)
    //         .then( (response) => {return this.postSorting(response.posts)} )
    //         .then( (postToRepresent) =>  this.props.setPosts(postToRepresent))
    // }

    onPosts () {
        postService
            .getPosts()
            //.then( (response) => this.props.setPosts(response))

            //.then( (response) =>  {console.log(response); this.postSorting(response.posts)})
          .then(this.onAllPosts.bind(this))
    }

    onAllPosts(posts) {
      this.props.setPosts(posts.posts)
    }

    postSorting(posts) {
        let postToRepresent = [];

        for (let i = this.firstPost; i <= this.lastPost; i++) {
            postToRepresent.push(posts[i]);
        }
        this.firstPost = this.firstPost +3;
        this.lastPost = this.lastPost +3;
        let postsToRender = postToRepresent.map(this.renderPreview.bind(this));
      return postsToRender;
    }


    renderPreview(post, i) {
        return <li key={i}>
                    <PostPreview preview={post}/>
                </li>
    }

    render() {
      if(!this.props.posts)
        return  <section className="col-md-8">
                  <h2 className="page-header">Loading posts</h2>
                </section>

        return(
            <section className="col-md-8">
                <h2 className="page-header">Showing
                  {console.log(this.props.match.params.page)}
                    <span> {this.props.match.params.page} </span>
                    posts
                </h2>
                <ul className="posts-list">
                    {/*{this.props.posts.map( this.renderPreview.bind(this) )}*/}
                  {this.postSorting(this.props.posts)}
                </ul>
                <Pager/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.posts }
}

export default connect(mapStateToProps, null)(PostsFeed)
