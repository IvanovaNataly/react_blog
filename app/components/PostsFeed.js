import React, { Component } from 'react';
import { connect } from 'react-redux';
import postService from '../services/postService';
import PostPreview from './PostPreview';
import { setPosts } from '../actions/actionCreators';


class PostsFeed extends Component {
    constructor() {
        super();
        this.state =  {posts: []} ;
        this.onPostNew();

    }
  // getPosts() {
  //       fetch(url)
  //           .then(res => {
  //               if (res.ok) {
  //                   console.log(res)
  //                   return res;
  //               }
  //               throw new Error("No data!")
  //           })
  //       console.log("In PostService")
  //   }

    onPostNew () {
            postService
                .getPosts()
                .then( (response) =>  this.props.setPosts(response.posts))
                //(  this.onPosts.bind(this))
        }

    onPosts(posts) {
        // this.setState ({
        //     posts: posts
        // } )
      this.props.setPosts(posts)
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
                    <span> 7 </span>
                    posts
                </h2>
                <ul>
                  {console.log(this.props.posts)}
                    {this.props.posts.map( this.renderPreview.bind(this) )}
                </ul>

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
