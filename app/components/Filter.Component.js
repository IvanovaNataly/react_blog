import React, { Component } from "react";
import { connect } from "react-redux";

class Filter extends Component {

  filterTags() {
    let filters = [];
    if(this.props.posts) {
      //let post = this.props.posts[0];
      let filt = [];
      this.props.posts.map( post => {
        console.log(post)
        post.tags.filter(tagit, i => {

          if (!filt[i].tag == tagit) {
            filt.push({tag});
          }
          else {
            let objCount = filt.find(obj => {
              obj.tag == tag;
            });
            objCount.count =+1;
          }

        })

      })
      console.log(filt)
    }
  }

  render() {
    return (
      <div className="well">
        {console.log(this.props.posts)}
        <h3>Filter Posts</h3>

        <div className="list-group">
          <a href="#" className="list-group-item active">
            <span className="badge">{this.props.posts.length}</span>
            Show All Posts
          </a>
        </div>

        <h4><small className="glyphicon glyphicon-tag"></small> Category</h4>
        <div className="list-group">
          {this.filterTags()}
          <a href="#" className="list-group-item">
            <span className="badge">4</span>
            AngularJS
          </a>
        </div>

        <h4><small className="glyphicon glyphicon-user"></small> Author</h4>
        <div className="list-group">
          <a href="#" className="list-group-item">
            <span className="badge">2</span>
            Alex Ilyaev
          </a>
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
