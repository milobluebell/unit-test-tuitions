import React from "react";

export class AsyncApp extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    const message = await Promise.resolve("ok");
    this.setState({ message });
  }

  render() {
    return (
      <>
        <span id="reminder">{this.state.message}</span>
        <button onClick={this.fetchData} id="button">
          谢谢老板
        </button>
      </>
    );
  }
}
