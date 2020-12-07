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
