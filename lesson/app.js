//  const stName = () =>{
//      return "Hello";
//  }
//  exports.stName = stName;


const local = require("./welcome");
local.sayHello();
console.log(local.currTime);
console.log(local.companyName);
