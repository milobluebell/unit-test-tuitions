
export const fullfiledResponse = {
  "statuscode": 1,
  "message": "success",
  "data": {
    "name": "g[yX7E"
  }
};

export const rejectedResponse = {
  "statuscode": 0,
  "message": "failed",
}

export class Client {

  static getInfo($clientId = 1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fullfiledResponse);
      }, 500)
    });
  }

  static beatIt($clientId = 1) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(rejectedResponse)
      }, 500)
    });
  }

}