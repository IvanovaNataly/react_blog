import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import htmlService from '../services/htmlService';
import moment  from "moment";


const cl = console.log;

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = { page: "" };
    }

    restoreTitle() {
        let title = this.props.match.params.title.replace("-", " - ");
        return title;
    }

    componentDidMount() {
        htmlService.getHTML(this.restoreTitle())
            .then( page => {
                this.setState({page});
            } )
    }

    time(date) {
        return moment.unix(date/1000).format("MMM DD, YYYY");
    }

    renderTags(tag, i ) {
        return <span key={i}>
                <a href="#" className="label label-default"> {tag} </a>
            </span>;

    }

    render() {

        return (
            <section className="col-md-8">
                <article>
                    <header>
                        <h2>
                            {this.props.selectedPost.title}
                        </h2>
                        <hr/>
                        <p>
                            <small className="glyphicon glyphicon-user"></small>
                            by {this.props.selectedPost.author}
                        </p>
                        <p>
                            <small className="glyphicon glyphicon-time"></small>
                            Posted on {this.time(this.props.selectedPost.date)}
                        </p>
                    </header>

                    <br/>

                    <footer className="clearfix">
                        <p className="pull-left">
                            <span className="tags-title">Tags:</span>
                            {this.props.selectedPost.tags.map( this.renderTags.bind(this) ) }
                        </p>

                    </footer>
                    <hr/>

                    <div>
                        {renderHTML(this.state.page)}
                    </div>

                </article>
            </section>


        )
    }
}

function mapStateToProps(state) {
    return { selectedPost: state.selectedPost }
}

export default connect(mapStateToProps, null)(PostPage)
