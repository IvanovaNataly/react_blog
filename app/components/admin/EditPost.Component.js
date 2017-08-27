import React, { Component } from 'react';
import { connect } from "react-redux";
import Input from "./Input.Component";
import Markdown from "./Markdown.Component";
import { editPosts } from "../../actions/actionCreators";
import moment  from "moment";


const cl = console.log;

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    previousTitle: '',
                    postToEdit: {},
                    onSubmit: false
                }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (location.search) {
            let locationArr = location.search.split("?")[1].split("=");

            let postToEdit = this.props.posts.find(post => {
                let name = post.title.replace(" - ", "-").toLowerCase();
                return name === locationArr[1];
            });

            this.setState( {postToEdit,
                            previousTitle: postToEdit.title} );
        }
    }

    onSubmit(propertyName, propertyValue) { //children components transfer edited values to the parent state
        let postToEdit = this.state.postToEdit;
        postToEdit[propertyName] = propertyValue;
        this.setState({postToEdit});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({onSubmit: true}); //just after click children components transfer edited values

        setTimeout( () => this.props.editPosts(this.state.postToEdit, this.state.previousTitle), 0 ); //postToEdit is formed after all children components are rendered
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }


    render() {
        cl(this.state);
        let post = this.state.postToEdit;
        return (
            <section className="col-md-12 edit-post">
                <h2 className="page-header">Edit Post</h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6">

                            <Input type="input" name="Title" value={post.title} onSubmit={this.state.onSubmit} onSubmitCallback={this.onSubmit.bind(this)}/>

                            <Input type="input" name="Author" value={post.author} onSubmit={this.state.onSubmit} onSubmitCallback={this.onSubmit.bind(this)}/>

                            <div className="form-group">
                                <label htmlFor="postTags">Tags</label>
                                <input type="text" className="form-control" id="postTags"
                                       name="postTags" placeholder="Post Tags"
                                       defaultValue={post.tags.join(", " ) }/>

                                    <p className="help-block">Separate multiple tags with a comma.
                                        e.g.<code>Grunt,Tools</code></p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <Input type="textarea" name="Description" value={post.description} onSubmit={this.state.onSubmit} onSubmitCallback={this.onSubmit.bind(this)}/>
                        </div>
                    </div>
                    <hr></hr>

                        <div className="row">
                            <Markdown mdPath={post.mdPath} onSubmit={this.state.onSubmit} onSubmitCallback={this.onSubmit.bind(this)}/>

                            <div className="col-sm-6">
                                <label>HTML Preview (read only)</label>
                                <div className="form-control previewPane">
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    <button type="submit" value="Submit" className="btn btn-primary">Save Post</button>
                    <button type="button" className="btn btn-danger pull-right">Delete Post</button>
                </form>

            </section>

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

export default  connect(mapStateToProps, mapDispatchToProps)(EditPost);

