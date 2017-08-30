/**
 * Created by tresermichael on 8/28/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "./Input.Component";
import Markdown from "./Markdown.Component";
import { editPosts } from "../../actions/actionCreators";

const cl = console.log;


class DeletePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addPost: false,
            previousTitle: "",
            postToEdit: {},
            onSubmit: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }

    onSubmit(propertyName, propertyValue) { //children components transfer edited values to the parent state
        let postToEdit = this.state.postToEdit;
        postToEdit[propertyName] = propertyValue;
        postToEdit.date = this.setCurrentTime();
        this.setState({postToEdit});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({onSubmit: "submitted"}); //just after click children components transfer edited values

        setTimeout( () => {
            this.props.editPosts(this.state.postToEdit, this.state.previousTitle);
            this.setState({onSubmit: "committed"});
        }, 0 );                            //postToEdit is formed after all children components are rendered
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    setCurrentTime() {
        return Math.round((new Date()).getTime());
    }

    render() {
        if ( this.props.addPost )
            return <span></span>;
        else return (
                <span>
                    <button type="button" className="btn btn-danger pull-right">Delete Post</button>
                </span>
            )
    }
}


function mapStateToProps(state) {
    return{
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return { editPosts: (posts, previousPostTitle) => dispatch( editPosts(posts, previousPostTitle) ) }
}

export default  connect(mapStateToProps, mapDispatchToProps)(DeletePost);

