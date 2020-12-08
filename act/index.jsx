import React, { useState, useEffect } from "react";

export class ClassComponent extends React.Component {
  constructor(_) {
    super(_);
    this.state = {
      message: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    setTimeout(() => {
      this.setState({
        message: "test"
      });
    }, 0);
  }

  render() {
    return (
      <>
        <span id="span">{this.state.message}</span>
        <button id="button" onClick={this.clickHandler}></button>
      </>
    );
  }
}

export const FunctionalComponent = () => {
  const [message, setMessage] = useState("");
  const clickHandler = () => {
    setTimeout(() => {
      setMessage("test");
    }, 0);
  };
  return (
    <>
      <span id="span">{message}</span>
      <button id="button" onClick={clickHandler}></button>
    </>
  );
};
