import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactLoading from "react-loading";
import SearchBar from "./SearchBar";
import Billion from "./Billion";
import ListRes from "./ListRes";
import Setting from "./Setting";

class Result extends Component {
  constructor(props) {
    super(props);
    this.oldq = "";
    this.updatePages = this.updatePages.bind(this);
  }
  updatePages(force = false) {
    let tmp = this.props.location.pathname.split("/");
    let q = tmp[tmp.length - 1];
    if (q !== this.oldq || force) {
      this.props.search(q);
      this.oldq = q;
    }
  }
  componentDidUpdate() {
    this.updatePages();
  }
  componentDidMount() {
    this.updatePages();
  }
  render() {
    return (
      <div className="result">
        <div className="result-head">
          {this.props.load ? (
            <ReactLoading
              type={"cylon"}
              color={"#adb5bd"}
              height={"5em"}
              width={"5em"}
              className="load"
            />
          ) : (
            ""
          )}
          <Setting
            setOpt={this.props.setOpt}
            initOpt={this.props.initOpt}
            updatePages={this.updatePages}
          />
          <Billion size="35px" changeSearchVal={this.props.changeSearchVal} />
          <SearchBar
            search={this.props.search}
            updatePages={this.updatePages}
            changeSearchVal={this.props.changeSearchVal}
            searchvalue={this.props.searchvalue}
            width={"40%"}
            height="40px"
          />
        </div>
        <span className="gap-result" />
        <ListRes listRes={this.props.listRes} />
      </div>
    );
  }
}

export default withRouter((props) => <Result {...props} />);
