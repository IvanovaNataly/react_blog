import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import moment  from 'moment';

export default class PostPreview extends Component {
  renderTags(tag, i ) {
    let span =
      <span key={i}>
        <a href="#" className="label label-default"> {tag} </a>
      </span>
    return span;

  }

  time(date) {
    return moment.unix(date/1000).format("MMM DD, YYYY");
  }

  render() {
    return (
      <article>
        <header>
          <h2>
              <NavLink to="/postPage" activeClassName="active">
                  {this.props.preview.title}
              </NavLink>
          </h2>
          <p>
            <small className="glyphicon glyphicon-user"></small>
               by {this.props.preview.author}
          </p>
          <p>
            <small className="glyphicon glyphicon-time"></small>
             Posted on {this.time(this.props.preview.date)}
          </p>
        </header>

        <p>{this.props.preview.description}</p>
        <br/>

        <footer className="clearfix">
          <p className="pull-left">
            <span className="tags-title">Tags:</span>
            {this.props.preview.tags.map( this.renderTags.bind(this) ) }
          </p>

          <a href="" className="btn btn-primary pull-right">
            Read More
            <i className="glyphicon glyphicon-chevron-right"></i>
          </a>

        </footer>
        <hr/>

      </article>
    )
  }
}
