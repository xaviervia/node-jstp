var jstp = require("../../../../../../index.js");

var Resource =  {
  userGet: function (engine, answer, dispatch) {
    if (answer) console.log("The answer: " + answer.body);
    else console.log(dispatch);
  }
}

var host = [["localhost", 33333, "tcp"], ["localhost", 44444, "tcp"]];

jstp.bind({
  host: host,
  endpoint: {
    method: "PUT",
    resource: ["User"],
  }
}, Resource.userGet, Resource);

setTimeout( function () {
  jstp.put({
    host: host,
    resource: ["User"],
    body: {
      message: "Hello World"
    }
  });
}, 1000);
