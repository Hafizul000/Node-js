 // os , path module
  const os = require("os");
//  console.log(os.userInfo());
//  console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
const relaseDate = os.release();
console.log(relaseDate);

const platFrom = os.platform();
console.log(platFrom);

const type = os.type();
console.log(type);



// console.log(__dirname);


// const path = require("path");
// // console.log(path);

// const extensionName = path.extname("index.html");
// console.log(extensionName);


// const joinName = path.join(__dirname + "/views");
// console.log(joinName);












