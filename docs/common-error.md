# jest/enzyme 测试中常遇到的 error

## 🕳 无法识别 import

```
/Users/milobluebell/Documents/GitHub/unit-test-tuitions/function-test/index.test.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { hasProperty, arrayUnique } from '.'; //

SyntaxError: Unexpected token {

  at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)
```

测试是在 node 环境下进行的，所以遵循的是 cjs 的模块方案，因此默认使用的是 require()。如果需要支持 import，需要使用 babel：

```shell
$ npm install @babel/preset-env
```

然后配置：

```js
// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};
```

## 🕳 "异常"中断测试

因为 throw Error 或 Promise.reject 均默认会打断测试，所以我们应该在 try...catch 中包裹对象函数，然后通过 catch.error 来对 error 结果进行断言测试。

## 🕳 无法识别 jsx 语法

需要安装并使用 @babel/preset-react

## 🕳 jest 测试用例中无法找到 React

```
ReferenceError: React is not defined

    7 |   // 组件交互测试 - 挂载
    8 |   it('test mount', function () {
>  9 |     const wrapper = mount(<App />);
      |                           ^
  10 |     expect(wrapper).not.toThrowError();
  11 |   });
  12 |

  at Object.<anonymous> (react-component-test/index.test.jsx:9:27)
```

和任何需要 react 组件参与的模块一样，需要在头部引入 React

```js
import React, { Component } from "react";
import { mount } from "enzyme";

// some codes
```

## 🕳 TypeError: Cannot read property 'child' of undefined

请检查 react 版本，如果是 17+，则是 enzyme-adapter 不支持的缘故

```shell
$ npm install @wojtekmaj/enzyme-adapter-react-17
```

setup file 设置为：

```js
const React = require("react");
const Enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

Enzyme.configure({ adapter: new Adapter() });
```

## 🕳 没有被 act 包裹

```
  console.error
    Warning: An update to AsyncApp inside a test was not wrapped in act(...).

    When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */

    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
        at AsyncApp (/Users/milobluebell/Documents/GitHub/unit-test-tuitions/react-async-test/index.fc.jsx:15:53)
        at WrapperComponent (/Users/milobluebell/Documents/GitHub/unit-test-tuitions/node_modules/enzyme-adapter-utils/build/createMountWrapper.js:114:7)
```

在 functional 组件里，通过调用 useState、useEffect 等 hooks 对状态进行操作（尤其是异步操作）需要被`act`包裹

```jsx
import { act } from "react-dom/test-utils";

describe("🧪 act", function () {
  it("render class component without act", async function () {
    const wrapper = mount(<ClassComponent />);
    const target = wrapper.find("#button");
    target.simulate("click");
    await new Promise((resolve) => setTimeout(() => resolve(), 200));
    expect(wrapper.find("#span").text()).toBe("test");
  });

  it("render functional component without act", async function () {
    const wrapper = mount(<FunctionalComponent />);
    const target = wrapper.find("#button");
    await act(async () => {
      target.simulate("click");
      await new Promise((resolve) => setTimeout(() => resolve(), 200));
    });

    expect(wrapper.find("#span").text()).toBe("test");
  });
});
```
