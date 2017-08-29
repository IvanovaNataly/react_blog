import React, { Component } from "react";
import { connect } from 'react-redux';
import {withRouter} from "react-router";
import { setSearch } from '../../actions/actionCreators';

const cl = console.log;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.posts,
                    filteredData: props.posts}
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

    render() {
        return (

            <div className="well">
                <h4>Search</h4>

                <form>
                    <div className="input-group">
                        <input type="search" name="search" className="form-control"
                               placeholder="Type Your Query"

                                onChange={ (event) => this.setFilteredList(event.target.value) }></input>

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

function mapDispatchToProps(dispatch) {
    return { setSearch: (posts) => dispatch( setSearch(posts) ) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
