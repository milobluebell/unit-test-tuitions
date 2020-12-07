import React, { Component } from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { AsyncApp } from "./index.jsx";
import { AsyncApp as asyncAppFC } from "./index.fc.jsx";

describe("🧪 react CLASS component test within async updating", function () {
  it("test async correctly", function (done) {
    const wrapper = mount(<AsyncApp />);
    const target = wrapper.find("#button");
    target.simulate("click");
    // expect(wrapper.find("#reminder").text()).toBe("ok");
    setTimeout(() => {
      expect(wrapper.find("#reminder").text()).toBe("ok");
      done();
    }, 500);
  });
});

describe("🧪 react FUNCTIONAL component test within async updating", function () {
  it("test async correctly", function (done) {
    const wrapper = mount(<AsyncApp />);
    const target = wrapper.find("#button");
    target.simulate("click");
    // expect(wrapper.find("#reminder").text()).toBe("ok");
    setTimeout(() => {
      expect(wrapper.find("#reminder").text()).toBe("ok");
      done();
    }, 500);
  });
});
