import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
// import {withRouter} from "react-router";

export default class PrePager extends Component {
    constructor() {
        super();
        this.state = {
            isPreviousDisabled: "",
            isNextDisabled: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentPage === nextProps.maxPageNumber)
            this.setState({isPreviousDisabled: "disabled"});
        else this.setState({isPreviousDisabled: ""})

        if (nextProps.currentPage == 1)
            this.setState({isNextDisabled: "disabled"});
        else this.setState({isNextDisabled: ""})
    }

    renderPreviousLink() {
        if(!this.state.isPreviousDisabled)
            return <NavLink to={`/posts/${ this.props.currentPage + 1 }` }>← Older</NavLink>;
        else return <span>← Older</span>;
    }

    renderNextLink() {
        if(!this.state.isNextDisabled)
            return <NavLink to={`/posts/${ this.props.currentPage - 1 }` }>Newer →</NavLink>;
        else return <span>Newer →</span>;
    }

    render() {
        return(
            <ul className="pager">
                <li id="previous" className={`previous ${this.state.isPreviousDisabled}`}>
                    {this.renderPreviousLink()}
                </li>
                <li id="next" className={`next ${this.state.isNextDisabled}`}>
                    {this.renderNextLink()}
                </li>
            </ul>
        )
    }

}
