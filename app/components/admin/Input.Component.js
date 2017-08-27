import React, { Component } from 'react';

const cl = console.log;

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name.toLowerCase()};
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let name = this.props.name.toLowerCase();
        let obj = {}
        obj[name] = this.props.value;
        this.setState(obj);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.onSubmit && nextProps.onSubmit !== this.props.onSubmit) {
            let nameString = this.state.name;
            this.props.onSubmitCallback(this.state.name, this.state[nameString])
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const nameString = this.state.name;
        const CustomTag = `${this.props.type}`;
        return (
            <div className="form-group required">
                <label htmlFor="postTitle">{this.props.name}</label>
                <CustomTag type="text" className="form-control" id={nameString} rows="10"
                       name={nameString} placeholder={nameString} required="" autoFocus=""
                       value={this.state[nameString]} onChange={this.handleChange}/>
            </div>
        )
    }
}
