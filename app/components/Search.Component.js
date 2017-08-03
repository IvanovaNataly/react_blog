import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="well">
        <h4>Search</h4>

        <form>
          <div className="input-group">
            <input type="search" name="search" className="form-control"></input>

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
