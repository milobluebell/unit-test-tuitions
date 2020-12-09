import { Client, fullfiledResponse, rejectedResponse } from '.';

// 
describe('🧪 async request', function () {

  // 同步测试❌
  // it('runing sync', function () {
  //   expect(Client.getInfo()).toEqual(fullfiledResponse);
  //   expect(Client.beatIt()).toEqual(rejectedResponse);
  // });

  // 使用async/await做异步测试✅
  it('1st way', async function () {
    const info = await Client.getInfo();
    let res;
    try {
      res = await Client.beatIt();
    } catch (err) {
      res = err;
    }
    expect(info).toEqual(fullfiledResponse);
    expect(res).toEqual(rejectedResponse);
  });

  // 使用expect(resolves|rejects)进行测试✅
  it('the 2nd way - for fullfiled', function () {
    return expect(Client.getInfo()).resolves.toEqual(fullfiledResponse);
  });
  it('the 2nd way - for rejected', function () {
    return expect(Client.beatIt()).rejects.toEqual(rejectedResponse);
  });

  // 使用done参数修改测试用例结束时间✅
  it('the 3rd way - for fullfiled', function (done) {
    Client.getInfo().then(res => {
      expect(res).toEqual(fullfiledResponse);
      done();
    });
  });
  it('the 3rd way - for rejected', function (done) {
    Client.beatIt().catch(err => {
      expect(err).toEqual(rejectedResponse);
      done();
    });
  });

  // 使用expect.assertions对期望调用次数进行断言✅
  // it('the 4th way', function () {
  //   expect.assertions(1);
  //   return Client.getInfo().then(err => {
  //     expect(err).toEqual(fullfiledResponse);
  //   });
  // });

});