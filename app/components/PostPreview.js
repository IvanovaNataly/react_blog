import React, { Component } from 'react';

export default class PostPreview extends Component {
  
  render() {
    return (
      <article>
        <header>
          <h2>{this.props.preview.title}</h2>
          <p>{this.props.preview.author}</p>
          <p>{this.props.preview.date}</p>
        </header>

        <p>post description</p>
        <br/>

        <footer>
          <p className="pull-left">
            <span className="tags-title">Tags:</span>
            <span>
              <a href="">JavaScript</a>
            </span>
            <span>
              <a href="">Angular</a>
            </span>
          </p>

          <a href="" className="btn btn-primary pull-right">
            Read More
            <i className="glyphicon glyphicon-chevron-right"></i>
          </a>

        </footer>

      </article>
    )
  }
}
