// const {stName} = require("./app");
// console.log(stName());


const welcome = {
    sayHello : function(){
        console.log("Hello User");
    },

    CurrTime : new Date().toLocaleDateString(),
    companyName : "BD",
}
module.exports = welcome;