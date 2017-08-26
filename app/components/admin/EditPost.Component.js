import React, { Component } from 'react';
import { connect } from "react-redux";
import htmlService from '../../services/htmlService';
import Input from "./Input.Component";

const cl = console.log;

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postToEdit: {},
            markdown: ''
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

            htmlService.getMarkup(postToEdit.mdPath)
            .then( markdown => {
                this.setState({markdown})
            } )

            this.setState({postToEdit});
        }
    }


    handleChange(event) {
        this.setState({markdown: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.markdown);
        event.preventDefault();
    }

    handleInputSubmit(value) {

    }

    render() {
        let post = this.state.postToEdit;
        return (
            <section className="col-md-12 edit-post">
                <h2 className="page-header">Edit Post</h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6">
                            {/*<div className="form-group required">*/}
                                {/*<label htmlFor="postTitle">Title</label>*/}
                                {/*<input type="text" className="form-control" id="postTitle"*/}
                                       {/*name="postTitle" placeholder="Post Title" required="" autoFocus=""*/}
                                       {/*defaultValue={post.title}/>*/}
                            {/*</div>*/}
                            <Input name="Title" title={post.title}/>
                            <div className="form-group required">
                                <label htmlFor="postAuthor">Author</label>
                                <input type="text" className="form-control" id="postAuthor"
                                       name="postAuthor" placeholder="Post Author" required=""
                                       defaultValue={post.author}/>
                            </div>
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
                            <div className="form-group required">
                                <label htmlFor="postDescription">Description</label>
                                <textarea className="form-control" id="postDescription" name="postDescription"
                                          rows="10" placeholder="Post Description" required="" defaultValue={post.description}/>
                            </div>
                        </div>
                    </div>
                    <hr></hr>


                        <div className="row">
                            <div className="form-group required col-sm-6">
                                <label htmlFor="postMd">Markdown</label>
                                <textarea value={this.state.markdown} onChange={this.handleChange}
                                          className="form-control previewPane" id="postMd" name="postMd"
                                          placeholder="Post Markdown" required=""/>
                            </div>

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

export default  connect(mapStateToProps, null)(EditPost);

