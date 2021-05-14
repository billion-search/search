import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DocRes extends Component {
  render() {
    let url = `/s/doc/${this.props.doc.getId()}`;
    return (
      <div className="docres">
        <Link to={url}>
          <div className="docres-head">
            <span className="docres-link">{url}</span>
            <span className="docres-title">{this.props.doc.getTitle(0.1)}</span>
          </div>
        </Link>
        <span className="docres-text">{this.props.doc.getText(0.1)}</span>
      </div>
    );
  }
}
