import React, { Component } from "react";

export default class OptWeighter extends Component {
  render() {
    return (
      <div className="opt-weig">
        <label className="container ligth-container">
          WeighterBool
          <input
            onChange={this.props.onChange}
            type="radio"
            defaultChecked={this.props.active === "WeighterBool"}
            name="sous-radio1"
            value="WeighterBool"
          />
          <span className="checkmark radio-checkmark"></span>
        </label>
        <label className="container ligth-container">
          WeighterTF
          <input
            onChange={this.props.onChange}
            type="radio"
            defaultChecked={this.props.active === "WeighterTF"}
            name="sous-radio1"
            value="WeighterTF"
          />
          <span className="checkmark radio-checkmark"></span>
        </label>
        <label className="container ligth-container">
          WeighterIDF
          <input
            onChange={this.props.onChange}
            type="radio"
            defaultChecked={this.props.active === "WeighterIDF"}
            name="sous-radio1"
            value="WeighterIDF"
          />
          <span className="checkmark radio-checkmark"></span>
        </label>
        <label className="container ligth-container">
          WeighterLogTF
          <input
            onChange={this.props.onChange}
            type="radio"
            defaultChecked={this.props.active === "WeighterLogTF"}
            name="sous-radio1"
            value="WeighterLogTF"
          />
          <span className="checkmark radio-checkmark"></span>
        </label>
        <label className="container ligth-container">
          WeighterLog
          <input
            onChange={this.props.onChange}
            type="radio"
            defaultChecked={this.props.active === "WeighterLog"}
            name="sous-radio1"
            value="WeighterLog"
          />
          <span className="checkmark radio-checkmark"></span>
        </label>
      </div>
    );
  }
}
