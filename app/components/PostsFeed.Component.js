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
            pageNumber: 1,
            firstPost: 0,
            lastPost: 2
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.match.params.reference);
        let filteredList = this.postFilter(nextProps.posts);
        this.setState({ filteredList: filteredList,
                    pageNumber: this.setPageNumber(nextProps.match.params.reference),
                    firstPost: this.state.firstPost+3,
                    lastPost: this.state.lastPost+3
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

            switch(locationKey){
                case ("author"):
                    let postToRepresent = posts.filter( post => {
                        let name = post.author.replace(" ", "-").toLowerCase();
                        return name.indexOf(locationValue) > -1;
                    });
                    return postToRepresent;
                case ("topic"):
                    var postToRepresent = posts.filter( post => {
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
        if(this.props.posts.length === 0)
            return  <section className="col-md-8">
                <h2 className="page-header">Loading posts</h2>
            </section>

        return(
            <section className="col-md-8">
                <h2 className="page-header">Showing
                    <span> {this.postCount(this.state.filteredList).length} </span>
                    posts
                </h2>
                <ul className="posts-list">
                    {this.postCount(this.state.filteredList)}
                </ul>
                <Pager currentPage={this.state.pageNumber}/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, null)(PostsFeed)

