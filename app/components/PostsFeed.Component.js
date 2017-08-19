import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostPreview from './PostPreview.Component';
import Pager from './Pager.Component';

const cl = console.log;

class PostsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredList: props.posts,
            firstPost: 0,
            lastPost: 2
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ filteredList: nextProps.posts});
    }


    postFilter() {
        if (location.search) {
            let locationArr = location.search.split("?")[1].split("=");
            let locationKey = locationArr[0];
            let locationValue = locationArr[1];

            switch(locationKey){
                case ("author"):
                    let postToRepresent = this.props.posts.filter( post => {
                        let name = post.author.replace(" ", "-").toLowerCase();
                        return name.indexOf(locationValue) > -1;
                    });
                    return postToRepresent.map(this.renderPreview.bind(this));
                case ("topic"):
                    var postToRepresent = this.props.posts.filter( post => {
                        let tagsArr = post.tags.filter(tag => {
                            return tag.toLowerCase().indexOf(locationValue) > -1;
                        })
                        return tagsArr.length > 0;
                    });
                    return postToRepresent.map(this.renderPreview.bind(this));
            }
        }

        else return this.props.posts.map(this.renderPreview.bind(this));

    }


    renderPreview(post, i) {
        return <li key={i}>
            <PostPreview preview={post}/>
        </li>
    }

    render() {
        if(this.props.posts.length === 0)
            return  <section className="col-md-8">
              <h2 className="page-header">Loading posts</h2>
            </section>

        return(
            <section className="col-md-8">
                <h2 className="page-header">Showing
                        <span> {this.props.match.params.page} </span>
                    posts
                </h2>
                <ul className="posts-list">
                    {this.postFilter(this.props.match.params.reference)}
                </ul>
                <Pager/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, null)(PostsFeed)
