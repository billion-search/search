import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Billion from "./Billion";
import Setting from "./Setting";

export default class Accueil extends Component {
  render() {
    return (
      <div className="accueil">
        <Setting setOpt={this.props.setOpt} initOpt={this.props.initOpt} />
        <Billion size="120px" changeSearchVal={this.props.changeSearchVal} />
        <SearchBar
          // search={this.props.search}
          changeSearchVal={this.props.changeSearchVal}
          searchvalue={this.props.searchvalue}
          width={"60%"}
          height="50px"
        />
      </div>
    );
  }
}
