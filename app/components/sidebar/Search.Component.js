import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import {withRouter} from "react-router";
import { setSearch } from '../../actions/actionCreators';

const cl = console.log;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.posts,
                    filteredData: props.posts};
        this.renderSearchInput = this.renderSearchInput.bind(this);
    }

    setFilteredList(value) {
        let filtered = this.state.data.filter( el => {
            let param = el.title.toLowerCase()
                    + " " + el.author.toLowerCase()
                    + " " + el.description.toLowerCase()
                    + " " + el.tags.join(" ").toLowerCase();

            return param.indexOf(value.toLowerCase()) > -1;
        })
        this.setState({ filteredData: filtered });
        this.props.setSearch({posts: filtered});
    }

    renderSearchInput() {
        const SearchField = () => (
            <Route render={
                ( {history}) => (
                    <input onChange={(event) => {
                        let e = event.target.value;
                        history.push(`/posts?search=${e}`)
                    }} type="search" name="search" className="form-control" placeholder="Type Your Query">
                    </input>
                )} />
        )
        return new SearchField();
    }

    render() {
        return (
            <div className="well">
                <h4>Search</h4>

                <form>
                    <div className="input-group">
                        {this.renderSearchInput()}
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                        </span>
                    </div>

                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default withRouter(connect(mapStateToProps)(Search));
