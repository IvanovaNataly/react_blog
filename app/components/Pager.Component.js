import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
// import {withRouter} from "react-router";

export default class PrePager extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentPage: nextProps.currentPage })
    }

    render() {
        return(
            <ul className="pager">
                <li id="previous" className="previous">
                    <NavLink to={`/posts/${ this.state.currentPage + 1 }`}>← Older</NavLink>
                </li>
                <li id="next" className="next">
                    <NavLink to={`/posts/${ this.state.currentPage - 1}`}>Newer →</NavLink>
                </li>
            </ul>
        )
    }

}
