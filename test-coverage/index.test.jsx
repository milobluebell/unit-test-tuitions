import React, { Component } from "react";
import { testFunction, App } from "./index.jsx";
import { mount } from "enzyme";

describe("🧪 test testFunction for coverage", function () {
  it("run correctly", function () {
    expect(testFunction(1)).toBe("是number啊");
    expect(testFunction("1")).toBe("是string啊");
  });
});

describe("🧪 test App for coverage", function () {
  it("callback called correctly", function () {
    const onButtonClickHandler1 = jest.fn();
    const onButtonClickHandler2 = jest.fn();
    const onButtonClickHandler3 = jest.fn();
    const wrapper1 = mount(
      <App id={1} onButtonClickHandler={onButtonClickHandler1} />
    );
    const wrapper2 = mount(
      <App id={"1"} onButtonClickHandler={onButtonClickHandler2} />
    );
    const wrapper3 = mount(
      <App id={11} onButtonClickHandler={onButtonClickHandler3} />
    );
    const target1 = wrapper1.find("#button");
    const target2 = wrapper2.find("#button");
    const target3 = wrapper3.find("#button");

    target1.simulate("click");
    expect(onButtonClickHandler1).toHaveBeenCalled();

    target2.simulate("click");
    expect(onButtonClickHandler2).toHaveBeenCalled();

    target3.simulate("click");
    expect(onButtonClickHandler3).toHaveBeenCalled();
  });
});
