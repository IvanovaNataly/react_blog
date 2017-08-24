import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import moment  from "moment";
import {withRouter} from "react-router";
import { Route } from 'react-router-dom'

const Button = () => (
    <Route render={
        ( {history}) => (
        <td
            type='button'
            onClick={() => { history.push('/edit-post') }}
        >
name
        </td>
    )} />
)

class Admin extends Component {

    time(date) {
        return moment.unix(date/1000).format("MMM DD, YYYY");
    }

    handleClick(e)  {
        this.router.transitionTo('index');
    }



    renderPost(post,i) {
        let td = new Button(this.props);
        console.log(td);

        return td;
        {/*<tr key={i}>*/}



                {/*<th scope="row">{i+1}</th>*/}
                {/*<td>{post.title}</td>*/}
                {/*<td>{post.author}</td>*/}
                {/*<td>{this.time(post.date)}</td>*/}
		//
    // </tr>
    }

    render() {
        return (
            <section className="col-md-8">
                <h2 className="page-header">Edit posts</h2>
                <table className="table table-bordered table-hover table-striped postsTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>
                                Title
                                <span className="pull-right"></span>
                            </th>
                            <th>
                                Author
                                <span className="pull-right"></span>
                            </th>
                            <th>
                                Date
                                <span className="pull-right">
                                    <i className="glyphicon glyphicon-chevron-down"></i>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.posts.map( this.renderPost.bind(this) ) }
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

export default  withRouter(connect(mapStateToProps, null)(Admin));
