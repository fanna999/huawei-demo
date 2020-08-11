var axios = {
    get: function (url) {
      let promise = new Promise(function (reject, resolve) {
        let xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.send();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(xhr.statusText);
        };
      });
      return promise;
    },
  };
