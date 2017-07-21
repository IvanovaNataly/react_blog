import React, { Component } from 'react';

export default class PostPreview extends Component {
  renderTags(tag, i ) {
    let span =
      <span key={i}>
        <a href="#" className="label label-default"> {tag} </a>
      </span>
    return span;

  }

  render() {
    return (
      <article>
        <header>
          <h2>{this.props.preview.title}</h2>
          <p>
            <small className="glyphicon glyphicon-user"></small>
            {this.props.preview.author}
          </p>
          <p>
            <small className="glyphicon glyphicon-time"></small>
            {this.props.preview.date}
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
