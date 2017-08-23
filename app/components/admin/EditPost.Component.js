import React, { Component } from 'react';

export default class EditPost extends Component {

    render() {
        return (
            <section className="col-md-12 edit-post">
                <h2 className="page-header">Edit Post</h2>

                <form>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="htmlForm-group required">
                                <label htmlFor="postTitle">Title</label>
                                <input type="text" className="form-control" id="postTitle" name="postTitle" placeholder="Post Title" required="" autoFocus="" defaultValue="Grunt - Custom Tasks"/>
                            </div>
                            <div className="form-group required">
                                <label htmlFor="postAuthor">Author</label>
                                <input type="text" className="form-control" id="postAuthor" name="postAuthor" placeholder="Post Author" required="" defaultValue="Alex Ilyaev"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="postTags">Tags</label>
                                <input type="text" className="form-control" id="postTags" name="postTags" placeholder="Post Tags" defaultValue="Grunt,Tools"/>

                                    <p className="help-block">Separate multiple tags with a comma.
                                        e.g.<code>Grunt,Tools</code></p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group required">
                                <label htmlFor="postDescription">Description</label>
                                <textarea className="form-control" id="postDescription" name="postDescription" rows="10" placeholder="Post Description" required=""></textarea>
                            </div>
                        </div>
                    </div>
                    <hr></hr>


                        <div className="row">
                            <div className="form-group required col-sm-6">
                                <label htmlFor="postMd">Markdown</label>

                                <textarea className="form-control previewPane" id="postMd" name="postMd" rows="20" placeholder="Post Markdown" required="">

							    </textarea>
                            </div>

                            <div className="col-sm-6">
                                <label>HTML Preview (read only)</label>

                                <div className="form-control previewPane">

                                </div>
                            </div>
                        </div>
                        <hr></hr>

                        <button type="submit" className="btn btn-primary">Save Post</button>
                        <button type="button" className="btn btn-danger pull-right">Delete Post</button>
                </form>

            </section>

        )
    }
}
