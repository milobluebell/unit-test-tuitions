import React, { Component } from "react";
import { mount } from "enzyme";
import { App as FuncComp } from "./index.jsx";
import { App as ClassComp } from "../react-class-component-test/index.jsx";

describe("🧪 react functional component test", function () {
  it("compute state correctly in class component", function () {
    const onButtonClickHandler = jest.fn();
    const wrapper = mount(<ClassComp onButtonClick={onButtonClickHandler} />);
    const target = wrapper.find("#button");
    target.simulate("click");

    expect(wrapper.state("status")).toBe(true);
    expect(wrapper.prop("onButtonClick")).toHaveBeenCalled();
  });

  it("compute state correctly in functional component", function () {
    const onButtonClickHandler = jest.fn();
    const wrapper = mount(<FuncComp onButtonClick={onButtonClickHandler} />);
    const target = wrapper.find("#button");
    target.simulate("click");

    // expect(wrapper.state("status")).toBe(true); // FC没有state
    expect(wrapper.prop("onButtonClick")).toHaveBeenCalled();
  });
});
