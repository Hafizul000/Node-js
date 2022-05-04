
const fs = require("fs");

fs.unlink("demo.txt",function(err){
  
    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
});