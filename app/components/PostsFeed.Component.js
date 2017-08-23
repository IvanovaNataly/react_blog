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
            pageNumber: this.setPageNumber(props.match.params.reference),
            maxPageNumber: Math.ceil(props.posts/3)
        }
    }

    componentWillReceiveProps(nextProps) {
        let filteredList = this.postFilter(nextProps.posts);
        this.setState({ filteredList: filteredList,
                    pageNumber: this.setPageNumber(nextProps.match.params.reference),
                    maxPageNumber: Math.ceil(filteredList.length/3)
                });
    }

    setPageNumber(pageNumber) {
        if(!pageNumber) {
            return 1;
        }
        else return parseInt(pageNumber);
    }

    postCount(posts) {
        let pager = this.state.pageNumber * 3 - 1;
        let postToRepresent = [];
        for (let i = pager - 2; i <= pager; i++) {
            if(!posts[i]) break;
            postToRepresent.push(posts[i]);
        }
        return postToRepresent.map(this.renderPreview.bind(this));
    }


    postFilter(posts) {
        if (location.search) {
            let locationArr = location.search.split("?")[1].split("=");
            let locationKey = locationArr[0];
            let locationValue = locationArr[1];
            let postToRepresent;

            switch(locationKey){
                case ("author"):
                    postToRepresent  = posts.filter( post => {
                        let name = post.author.replace(" ", "-").toLowerCase();
                        return name.indexOf(locationValue) > -1;
                    });
                    return postToRepresent;
                case ("topic"):
                    postToRepresent = posts.filter( post => {
                        let tagsArr = post.tags.filter(tag => {
                            return tag.toLowerCase().indexOf(locationValue) > -1;
                        })
                        return tagsArr.length > 0;
                    });
                    return postToRepresent;
            }
        }
        else return posts;
    }


    renderPreview(post, i) {
        return <li key={i}>
            <PostPreview preview={post}/>
        </li>
    }

    render() {
        // if (this.props.match.params.reference === "1")
        //     return <Redirect to="/posts"/>;

        if(this.props.posts.length === 0)
            return (
                <section className="col-md-8">
                    <h2 className="page-header">Loading posts</h2>
                </section>
                );


        else return(
            <section className="col-md-8">
                <h2 className="page-header">Showing
                    <span> {this.postCount(this.state.filteredList).length} </span>
                    posts
                </h2>
                <ul className="posts-list">
                    {this.postCount(this.state.filteredList)}
                </ul>
                <Pager currentPage={this.state.pageNumber} maxPageNumber={this.state.maxPageNumber}/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, null)(PostsFeed)

