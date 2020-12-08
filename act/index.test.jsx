import React from "react";
import { act } from "react-dom/test-utils";
import { ClassComponent, FunctionalComponent } from "./index.jsx";
import { mount } from "enzyme";

describe("🧪 act", function() {
  it("render class component without act", async function() {
    const wrapper = mount(<ClassComponent />);
    const target = wrapper.find("#button");
    target.simulate("click");
    await new Promise(resolve => setTimeout(() => resolve(), 200));
    expect(wrapper.find("#span").text()).toBe("test");
  });

  it("render functional component without act", async function() {
    const wrapper = mount(<FunctionalComponent />);
    const target = wrapper.find("#button");
    await act(async () => {
      target.simulate("click");
      await new Promise(resolve => setTimeout(() => resolve(), 200));
    });

    expect(wrapper.find("#span").text()).toBe("test");
  });
});
