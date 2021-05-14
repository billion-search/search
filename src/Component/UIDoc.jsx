import React, { Component } from "react";
import { Route } from "react-router-dom";
import PageDoc from "./PageDoc";

export default class UIDoc extends Component {
  render() {
    let res = [];
    this.props.listRes.forEach((e) => {
      res.push(
        <Route
          key={e.getId()}
          path={`/s/doc/${e.getId()}`}
          exact
          render={(props) => <PageDoc {...props} doc={e} />}
        />
      );
    });
    return <div className="uidoc">{res}</div>;
  }
}
