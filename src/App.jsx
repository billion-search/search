import React, { Component } from "react";
import Accueil from "./Component/Accueil";
import Result from "./Component/Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Document from "./Object/Document";
import "./Style/App.css";
import "./Style/searchBar.css";
import "./Style/accueil.css";
import "./Style/result.css";
import "./Style/billion.css";
import "./Style/setting.css";
import "./Style/docres.css";
import "./Style/listres.css";
import "./Style/uidoc.css";
import "./Style/pagedoc.css";
import UIDoc from "./Component/UIDoc";
import ErreurPath from "./Component/ErreurPath";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      opt: {
        show: false,
        model: "Vectoriel",
        wg: "WeighterBool",
        norm: true,
        b: 0.75,
        k1: 1.2,
        sigma: 0.1,
        pageRank: false,
      },
      searchvalue: "",
      listRes: [],
    };
    this.changeSearchVal = this.changeSearchVal.bind(this);
    this.callbackSearch = this.callbackSearch.bind(this);
    this.callbackSearchCatch = this.callbackSearchCatch.bind(this);
    this.setListRes = this.setListRes.bind(this);
    this.setOpt = this.setOpt.bind(this);
    this.search = this.search.bind(this);
  }

  setOpt(newOpt) {
    this.setState({ opt: newOpt });
  }
  changeSearchVal(newval) {
    this.setState({ searchvalue: newval });
  }

  setListRes(newlistRes) {
    this.setState({ listRes: newlistRes });
  }

  setSetting(newparam) {
    this.setState({ param: newparam });
  }
  callbackSearch(res) {
    this.setListRes(res);
    this.setState({ load: false });
  }
  callbackSearchCatch(res) {
    this.setListRes(res);
    this.setState({ load: false });
  }
  search(query) {
    this.setState({ searchvalue: query, load: true, listRes: [] });
    Document.searchDoc(
      this.state.opt,
      query,
      this.callbackSearch,
      this.callbackSearchCatch
    );
  }
  render() {
    return (
      <div className="App">
        <Router forceRefresh={false}>
          <Switch>
            <Route
              path="/search"
              exact
              render={(props) => (
                <Accueil
                  {...props}
                  initOpt={this.state.opt}
                  setOpt={this.setOpt}
                  // search={this.search}
                  searchvalue={this.state.searchvalue}
                  changeSearchVal={this.changeSearchVal}
                />
              )}
            />
            <Route
              path="/s/result"
              render={(props) => (
                <Result
                  {...props}
                  initOpt={this.state.opt}
                  setOpt={this.setOpt}
                  load={this.state.load}
                  search={this.search}
                  listRes={this.state.listRes}
                  searchvalue={this.state.searchvalue}
                  changeSearchVal={this.changeSearchVal}
                />
              )}
            />
            <UIDoc listRes={this.state.listRes} />
            <Route path="/s" component={ErreurPath} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
