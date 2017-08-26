import React, { Component } from 'react';

const cl = console.log;

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.title
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();

    }

    render() {
        return (
            <div className="form-group required">
                <label htmlFor="postTitle">{this.props.name}</label>
                <input type="text" className="form-control" id="postTitle"
                       name="postTitle" placeholder="Post Title" required="" autoFocus=""
                       value={this.state.value} onChange={this.handleChange}/>
            </div>
        )
    }
}
// defaultValue={this.props.title}
