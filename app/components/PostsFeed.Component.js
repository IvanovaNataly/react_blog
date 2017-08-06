import React, { Component } from 'react';
import { connect } from 'react-redux';
import postService from '../services/postService';
import PostPreview from './PostPreview.Component';
import Pager from './Pager.Component';
import { setPosts } from '../actions/actionCreators';


class PostsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filteredList: props.posts,
          firstPost: 0,
          lastPost: 2
        }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ filteredList: nextProps.posts});
      console.log(nextProps.match.params);
    }


  postFilter(value) {
      let postToRepresent = this.props.posts.filter( post => {
        let name = post.author.replace(" ", "-").toLowerCase();
        return name.indexOf(value) > -1;
      })

      // for (let i = this.state.firstPost; i <= this.state.lastPost; i++) {
      //   postToRepresent.push(posts[i]);
      // }
      // this.state.firstPost = this.state.firstPost +3;
      // this.state.lastPost = this.state.lastPost +3;
      let postsToRender = postToRepresent.map(this.renderPreview.bind(this));
      return postsToRender;
  }


    renderPreview(post, i) {
        return <li key={i}>
                    <PostPreview preview={post}/>
                </li>
    }

    render() {
      if(this.props.posts.length === 0)
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
                  {this.postFilter(this.props.match.params.reference)}
                </ul>
                <Pager/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, null)(PostsFeed)
