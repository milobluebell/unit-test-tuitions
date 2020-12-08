import React, { Component } from "react";
import { mount } from "enzyme";
import AsyncApp from "./index.jsx";
import { AsyncApp as AsyncAppFC } from "./index.fc.jsx";
import { act } from "react-dom/test-utils";

describe("🧪 CLASS component test within async updating", function () {
  it("test async correctly", async function () {
    const wrapper = mount(<AsyncApp />);
    const target = wrapper.find("#button");
    target.simulate("click");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(wrapper.find("#reminder").text()).toBe("ok");
  });
});

describe("🧪 FUNCTIONAL component test within async updating", function () {
  it("test async correctly", async function () {
    const wrapper = mount(<AsyncAppFC />);
    const target = wrapper.find("#button");
    await act(async () => {
      target.simulate("click");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    // wrapper.update();
    expect(wrapper.find("#reminder").text()).toBe("ok");
  });
});
