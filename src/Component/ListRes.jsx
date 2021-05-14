import React, { Component } from "react";
import DocRes from "./DocRes";

export default class ListRes extends Component {
  render() {
    let res = [];
    this.props.listRes.forEach((e) => {
      res.push(<DocRes key={e.getId()} doc={e} />);
    });
    return (
      <div className="listres">
        {res.length === 1 && this.props.listRes[0].getId() === -1 ? (
          <span style={{ fontSize: "0.8em" }}>
            {`Your search did not match any
          documents.`}
          </span>
        ) : (
          res
        )}
      </div>
    );
  }
}
