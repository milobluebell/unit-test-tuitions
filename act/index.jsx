import React, { useState, useEffect } from "react";

export class ClassComponent extends React.Component {
  constructor(_) {
    super(_);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      status: false,
    };
  }

  clickHandler() {
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    return (
      <>
        <span id="reminder">{this.state.status.toString()}</span>
        <button onClick={this.handleFetch} id="button">
          谢谢老板
        </button>
      </>
    );
  }
}

export class ClassComponentUpdatedByXhrResponse extends React.Component {
  constructor(_) {
    super(_);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      data: {},
    };
  }
}

const FunctionalComponent = () => {};

const FunctionalComponentUpdatedByXhrResponse = () => {};
