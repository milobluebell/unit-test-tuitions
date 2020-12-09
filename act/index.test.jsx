import React from "react";
import { act } from "react-dom/test-utils";
import { App } from "./index.jsx";
import { mount } from "enzyme";

describe("🧪 test act", function () {
  it("render class component with act triggerd by click 1st btn", async function () {
    const wrapper = mount(<App />);
    const target = wrapper.find("#button");
    await act(async () => {
      target.simulate("click");
      await new Promise((resolve) => setTimeout(() => resolve(), 200));
    });
    expect(wrapper.find("#span").text()).toBe("test");
  });

  // 有人说使用useEffect操作副作用也必须使用act包裹，但我发现并不用。
  it("render class component with act triggerd by click 2nd btn", async function () {
    const wrapper = mount(<App />);
    const target = wrapper.find("#button2");
    target.simulate("click");
    expect(document.title).toBe("test");
  });
});
