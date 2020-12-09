import React, { Component } from "react";
import { App } from "./index.jsx";
import { mount } from "enzyme";

describe("🧪 react component test", function () {
  // 组件交互测试 - 挂载
  it("test mount", function () {
    const wrapper = mount(<App />);
    expect(() => wrapper).not.toThrow();
  });

  // 组件交互测试 - 渲染内容
  it("rendered correctly", function () {
    const wrapper = mount(<App />);

    expect(wrapper.find("#content").length).toBe(1);
    expect(wrapper.find("#content").text()).toBe("还没谢");

    expect(wrapper.find("InnerApp").length).toBe(1);
  });

  // 组件交互测试 - 事件回调
  it("event triggered correctly", function () {
    const onButtonClickHandler = jest.fn();
    const wrapper = mount(<App onButtonClick={onButtonClickHandler} />);
    const target = wrapper.find("#button");

    target.simulate("click");
    expect(onButtonClickHandler).toHaveBeenCalledWith(true);

    target.simulate("click");
    expect(onButtonClickHandler).toHaveBeenCalledWith(false);

    expect(onButtonClickHandler).toHaveBeenCalledTimes(2);
  });
});
