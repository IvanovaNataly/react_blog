import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import moment  from "moment";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: props.posts };
        this.sort = this.sort.bind(this);
    }

    time(date) {
        return moment.unix(date/1000).format("MMM DD, YYYY");
    }

    renderPost(post,i) {
        let reference = post.title.replace(" - ", "-").toLowerCase();
        const TR = () => (
            <Route render={
                ( {history}) => (
                    <tr key={i} onClick={() => { history.push(`/edit-post?topic=${reference}`) }}>
                        <th scope="row">{i+1}</th>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                        <td>{this.time(post.date)}</td>
                    </tr>
                )} />
        )
        let tr = new TR();
        return tr;
    }

    sort(event) {
        let sortBy = event.target.id;
        let posts = this.state.posts.sort( (a, b) => {
            if (sortBy !== this.state.sortedBy) {
                var paramA = a[sortBy];
                var paramB = b[sortBy];
            }

            else {
                var paramB = a[sortBy];
                var paramA= b[sortBy];
            }
            if (paramA < paramB) {
                return -1;
            }
            if (paramA > paramB) {
                return 1;
            }

            return 0;
        })

        this.setState({posts,
                        sortedBy: this.state.sortedBy === sortBy ? sortBy + "-desc" : sortBy})
    }

    toggleIcon(iconId) {
        if(this.state.sortedBy == iconId) {
            return <i className="glyphicon glyphicon-chevron-down"></i>
        }
        else if(this.state.sortedBy == iconId + "-desc")
            return <i className="glyphicon glyphicon-chevron-up"></i>
    }

    render() {
        console.log(this.state)


        return (
            <section className="col-md-8">
                <h2 className="page-header">Edit posts</h2>
                <table className="table table-bordered table-hover table-striped postsTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th id="title" onClick={this.sort}>
                                Title
                                <span className="pull-right">
                                    {this.toggleIcon("title")}
                                </span>
                            </th>
                            <th id="author" onClick={this.sort}>
                                Author
                                <span className="pull-right">
                                    {this.toggleIcon("author")}
                                </span>
                            </th>
                            <th id="date" onClick={this.sort}>
                                Date
                                <span className="pull-right">
                                     {this.toggleIcon("date")}
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.posts.map( this.renderPost.bind(this) ) }
                    </tbody>
                </table>
                <footer>
                    <NavLink to="/add-post" className="btn btn-primary">Add Post</NavLink>
                </footer>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return{
        posts: state.posts
    }
}

export default  connect(mapStateToProps, null)(Admin);
