import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
// import {withRouter} from "react-router";

export default class PrePager extends Component {
  countPages() {
    this.currentPage = 1;

  }

  render() {
    return(
      <ul className="pager">
        <li className="previous">
          <NavLink to="/1">← Older</NavLink>
          {/*<a href="">← Older</a>*/}
        </li>
        <li className="next">
          <NavLink to="/2">Newer →</NavLink>
          {/*<a href="">Newer →</a>*/}
        </li>
      </ul>
    )
  }

}

// export default withRouter(PrePager);
