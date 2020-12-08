import React from "react";
import { fetchData } from "./service.js";

class AsyncApp extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleFetch = this.handleFetch.bind(this);
  }

  async handleFetch() {
    const message = await fetchData();
    this.setState({ message });
  }

  render() {
    return (
      <>
        <span id="reminder">{this.state.message}</span>
        <button onClick={this.handleFetch} id="button">
          谢谢老板
        </button>
      </>
    );
  }
}
export default AsyncApp;
