import React, { Component } from 'react';
import htmlService from '../../services/htmlService';

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

    componentWillReceiveProps(nextProps) {
        if(nextProps.onSubmit && nextProps.onSubmit !== this.props.onSubmit) {
            this.props.onSubmitCallback("markdown", this.state.markdown)
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
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

