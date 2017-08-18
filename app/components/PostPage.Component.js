import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import htmlService from '../services/htmlService';


const cl = console.log;

export default class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = { page: "" };
        // cl(props.match.params.title);
    }

    restoreTitle() {
        let title = this.props.match.params.title.replace("-", " - ");
        cl(title);
        return title;
    }

    componentDidMount() {
        htmlService.getHTML(this.restoreTitle())
            .then( page => {
                this.setState({page});
            } )
    }

    render() {

        return (
        <article>
            <header>
                <h2>
                    {/*{this.props.preview.title}*/}
                </h2>
                <p>
                    <small className="glyphicon glyphicon-user"></small>
                    {/*by {this.props.preview.author}*/}
                </p>
                <p>
                    <small className="glyphicon glyphicon-time"></small>
                    Posted on
                    {/*{this.time(this.props.preview.date)}*/}
                </p>
            </header>

            <br/>

            <footer className="clearfix">
                <p className="pull-left">
                    <span className="tags-title">Tags:</span>
                    {/*{this.props.preview.tags.map( this.renderTags.bind(this) ) }*/}
                </p>

            </footer>
            <hr/>

            <div>
                {renderHTML(this.state.page)}
            </div>

        </article>


        )
    }
}
