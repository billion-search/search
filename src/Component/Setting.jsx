import React, { Component } from "react";
import { AiFillSetting } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import OptWeighter from "./OptWeighter";

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.initOpt };
    this.state.show = false;
    this.oldOpt = { ...this.state };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickOpt = this.handleClickOpt.bind(this);
    this.handleChangeWg = this.handleChangeWg.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeNorm = this.handleChangeNorm.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleChangeK1 = this.handleChangeK1.bind(this);
    this.handleChangeSigma = this.handleChangeSigma.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleChangePageRank = this.handleChangePageRank.bind(this);
  }
  handleClickSave() {
    this.oldOpt.show = false;
    this.setState({ show: false });
    this.oldOpt = { ...this.state };
    this.props.setOpt(this.state);
    if (this.props.updatePages) {
      setTimeout(() => {
        this.props.updatePages(true);
      }, 10);
    }
  }
  handleChangeB(event) {
    this.setState({ b: event.target.value });
  }
  handleChangeK1(event) {
    this.setState({ k1: event.target.value });
  }
  handleChangeSigma(event) {
    this.setState({ sigma: event.target.value });
  }
  handleChangeNorm(e) {
    this.setState({ norm: !this.state.norm });
  }
  handleChangePageRank(e) {
    this.setState({ pageRank: !this.state.pageRank });
  }
  handleChangeWg(newwg) {
    this.setState({ wg: newwg.target.value });
  }
  handleChangeModel(newmodel) {
    this.setState({ model: newmodel.target.value });
  }
  handleClick() {
    this.setState({ show: true });
  }
  handleClickClose() {
    this.oldOpt.show = false;
    this.setState({ ...this.oldOpt });
  }
  handleClickOpt(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <div className="setting">
        <AiFillSetting
          size={35}
          className="setting-icon"
          onClick={this.handleClick}
        />
        {this.state.show ? (
          <>
            <div className="setting-opt-bcg" onClick={this.handleClickClose}>
              <div className="setting-opt" onClick={this.handleClickOpt}>
                <IoCloseOutline
                  className="setting-opt-close"
                  size="1.2em"
                  onClick={this.handleClickClose}
                />
                <div className="opt">
                  <div className="weig">PageRank</div>
                  <label className="container checkbox-container ligth-container">
                    Use
                    <input
                      type="checkbox"
                      defaultChecked={this.state.pageRank}
                      onChange={this.handleChangePageRank}
                    />
                    <span className="checkmark checkbox-checkmark"></span>
                  </label>
                </div>
                <div className="opt">
                  <div className="weig">Weighter</div>
                  <OptWeighter
                    onChange={this.handleChangeWg}
                    active={this.state.wg}
                  />
                </div>
                <div className="opt">
                  <label className="container radio-container">
                    Vectoriel
                    <input
                      onChange={this.handleChangeModel}
                      value="Vectoriel"
                      type="radio"
                      defaultChecked={this.state.model === "Vectoriel"}
                      name="radio"
                    />
                    <span className="checkmark radio-checkmark"></span>
                  </label>
                  <label className="container checkbox-container ligth-container">
                    Normalized
                    <input
                      type="checkbox"
                      defaultChecked={this.state.norm}
                      onChange={this.handleChangeNorm}
                    />
                    <span className="checkmark checkbox-checkmark"></span>
                  </label>
                </div>
                <div className="opt">
                  <label className="container radio-container">
                    ModeleLangue
                    <input
                      value="ModeleLangue"
                      defaultChecked={this.state.model === "ModeleLangue"}
                      onChange={this.handleChangeModel}
                      type="radio"
                      name="radio"
                    />
                    <span className="checkmark radio-checkmark"></span>
                  </label>
                  <label className="ligth-container text-container">
                    sigma
                    <input
                      className="input-text"
                      value={this.state.sigma}
                      onChange={this.handleChangeSigma}
                    />
                  </label>
                </div>
                <div className="opt">
                  <label className="container radio-container">
                    OkapiBM25
                    <input
                      value="OkapiBM25"
                      defaultChecked={this.state.model === "OkapiBM25"}
                      onChange={this.handleChangeModel}
                      type="radio"
                      name="radio"
                    />
                    <span className="checkmark radio-checkmark"></span>
                  </label>
                  <label className="ligth-container text-container">
                    k1
                    <input
                      className="input-text"
                      value={this.state.k1}
                      onChange={this.handleChangeK1}
                    />
                  </label>
                  <label className="ligth-container text-container">
                    b
                    <input
                      className="input-text"
                      value={this.state.b}
                      onChange={this.handleChangeB}
                    />
                  </label>
                </div>
                <div className="setting-save" onClick={this.handleClickSave}>
                  Save
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}
