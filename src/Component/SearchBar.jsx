import React, { Component } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Link, withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.changeSearchVal(event.target.value);
  }
  handleClick(event) {
    this.props.changeSearchVal("");
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.searchvalue !== "") {
      this.props.history.push(`/s/result/${this.props.searchvalue}`);
      if (this.props.updatePages) {
        setTimeout(() => {
          this.props.updatePages(true);
        }, 10);
      }
    }
  }
  keypressHandler(event) {
    if (event.key === "Enter") {
      this.inputRef.current.blur();
      this.inputRef.current.value = "";
      if (this.props.updatePages) {
        setTimeout(() => {
          this.props.updatePages(true);
        }, 10);
      }
    }
  }
  render() {
    return (
      <form
        className="search"
        style={{ width: this.props.width, height: this.props.height }}
        onSubmit={this.handleSubmit}
      >
        <div className="cont-input">
          <input
            className="input-search"
            value={this.props.searchvalue}
            onChange={this.handleChange}
            ref={this.inputRef}
            onKeyPress={(event) => this.keypressHandler(event)}
          />
          {this.props.searchvalue === "" ? (
            ""
          ) : (
            <IoCloseOutline
              className="clear-search"
              size="1.2em"
              onClick={this.handleClick}
            />
          )}
        </div>

        <span className="gap-search" />
        <Link to="/s/result" onClick={this.handleSubmit}>
          <RiSearch2Line className="icon-search" size="1em" />
        </Link>
      </form>
    );
  }
}

export default withRouter(SearchBar);
