import React, { Component } from 'react';

const cl = console.log;

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name.toLowerCase()}; // corresponds to the relevant key in the post object; sets id, name  and placeholder
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
            this.props.onSubmitCallback(this.state.name, this.state[nameString]) // transfers edited state to EditPost component
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value}); //records changes of input value to state
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const nameString = this.state.name;
        const CustomTag = `${this.props.type}`; //custom tag to set input or textarea according to the props
        return (
            <div className="form-group required">
                <label htmlFor="postTitle">{this.props.name}</label>
                <CustomTag type="text" className="form-control" id={nameString} rows="10"
                       name={nameString} placeholder={this.capitalizeFirstLetter(nameString)} required="" autoFocus=""
                       value={this.state[nameString]} onChange={this.handleChange}/>
            </div>
        )
    }
}
