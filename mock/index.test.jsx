import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { fetchData } from "../react-async-test/service.js";
import { AsyncApp } from "../react-async-test/index.fc.jsx";

jest.mock("../react-async-test/service.js", () => {
  return {
    fetchData: jest.fn(),
  };
});

describe("🧪 FUNCTIONAL component rendered a correct html content within a async service function updating", function () {
  it("test async correctly", async function () {
    fetchData.mockResolvedValueOnce("ok");
    const wrapper = mount(<AsyncApp />);
    const target = wrapper.find("#button");
    await act(async () => {
      target.simulate("click");
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find("#reminder").text()).toBe("ok");
  });
});
