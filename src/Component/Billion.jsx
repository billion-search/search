import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Billion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.changeSearchVal("");
  }
  render() {
    return (
      <div className="logo-billion" style={{ fontSize: this.props.size }}>
        <Link to="/search" onClick={this.handleClick}>
          <span className="child1">B</span>
          <span className="child2">illion</span>
        </Link>
      </div>
    );
  }
}
