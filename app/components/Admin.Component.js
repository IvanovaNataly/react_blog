import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Admin extends Component {

  renderPost(post,i) {
    return <tr key={i}>
            <th scope="row">{i}</th>
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{post.date}</td>
          </tr>
  }

  render() {
    return (
      <section className="col-md-8">
        <h2 className="page-header">Edit posts</h2>
        <table className="table table-bordered table-hover table-striped postsTable">
          <thead>
            <tr>
              <th>#</th>
              <th>
                Title
                <span className="pull-right"></span>
              </th>
              <th>
                Author
                <span className="pull-right"></span>
              </th>
              <th>
                Date
                <span className="pull-right">
                <i className="glyphicon glyphicon-chevron-down"></i>
              </span>
              </th>
            </tr>
          </thead>
          <tbody>
            { this.props.posts.map( this.renderPost.bind(this) ) }
          </tbody>
        </table>
        <footer>
          <NavLink to="/AddPost" className="btn btn-primary">Add Post</NavLink>
        </footer>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(Admin)
