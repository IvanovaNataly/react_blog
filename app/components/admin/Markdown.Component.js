import React, { Component } from 'react';
import { connect } from "react-redux";
import htmlService from '../../services/htmlService';
import postService from '../../services/postService';
import Input from "./Input.Component";
import { editPosts } from "../../actions/actionCreators";

const cl = console.log;

export default class Markdown extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        htmlService.getMarkdown(this.props.mdPath)
        .then( markdown => {
            this.setState({markdown})
        } )
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }


    render() {
        cl(this.state);
        return (
                <div className="form-group required col-sm-6">
                    <label htmlFor="markdown">Markdown</label>
                    <textarea value={this.state.markdown} onChange={this.handleChange}
                                className="form-control previewPane" id="markdown" name="markdown"
                                placeholder="Post Markdown"/>
                </div>

        )
    }
}

