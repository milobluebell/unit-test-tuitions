import React from "react";

// 子组件
export const InnerApp = ({ status }) => (
  <span id="content">{status ? "谢过了" : "还没谢"}</span>
);

// 父组件(根组件)
export class App extends React.Component {
  constructor(_) {
    super(_);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      status: false,
    };
  }
  handleClick(e) {
    this.setState(
      {
        status: !this.state.status,
      },
      function () {
        const { onButtonClick } = this.props;
        onButtonClick && onButtonClick(this.state.status);
      }
    );
  }
  render() {
    return (
      <div>
        <InnerApp status={this.state.status} />
        <button onClick={this.handleClick} id="button">
          谢谢老板
        </button>
      </div>
    );
  }
}
