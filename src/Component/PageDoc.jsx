import React, { Component } from "react";

export default class PageDoc extends Component {
  randomColorHax() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    let i = 0;
    while (color === "000000" && i < 100) {
      color = Math.floor(Math.random() * 16777215).toString(16);
      i += 1;
    }
    return color;
  }
  render() {
    let text = this.props.doc.getText(1);
    return (
      <div
        className="pagedoc"
        style={{ background: `#${this.randomColorHax()}` }}
      >
        <h1 className="pagedoc-title">{this.props.doc.getTitle(1)}</h1>
        <span className="pagedoc-text">
          <span className="pagedoc-begin-text">{text[0]}</span>
          {text.substring(1, text.length)}
        </span>
        <div className="pagedoc-cnt-auteur">
          <span className="pagedoc-auteur">{this.props.doc.getAuteur()}</span>
        </div>
      </div>
    );
  }
}
