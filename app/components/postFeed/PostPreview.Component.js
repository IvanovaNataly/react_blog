import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import moment  from "moment";

import { postSelected } from "../../actions/actionCreators";

class PostPreview extends Component {
    renderTags(tag, i ) {
        let tagit = tag.replace(" ", "-").toLowerCase();

        return <span key={i}>
                <NavLink to={{ pathname: '/posts', search: `?topic=${tagit}` }} className="label label-default" >{tag}
                </NavLink>
            </span>;
    }

    time(date) {
        return moment.unix(date/1000).format("MMM DD, YYYY");
    }

    trimTitle(title) {
        return title.split(" ").join("").replace(",", "-");
    }

    onTitleClicked() {
        this.props.onPostSelected(this.props.preview);
    }

    render() {

        return (
            <article>
                <header>
                    <h2 onClick={this.onTitleClicked.bind(this)}>
                        <NavLink exact to={`/article/${this.trimTitle( this.props.preview.title )}`}
                                 activeClassName="active" >
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

                    <span onClick={this.onTitleClicked.bind(this)}>
                        <NavLink exact to={`/article/${this.trimTitle( this.props.preview.title )}`}
                                 activeClassName="active" className="btn btn-primary pull-right">
                        Read More
                        <i className="glyphicon glyphicon-chevron-right"></i>
                    </NavLink>
                    </span>

                </footer>
                <hr/>

            </article>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { onPostSelected: (post) => dispatch( postSelected(post) ) }
}

export default connect(null, mapDispatchToProps)(PostPreview);
