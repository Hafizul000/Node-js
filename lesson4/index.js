
// import in the module
const http = require('http');
//  create server
const MyServer = http.createServer((req,res) =>{
//   sending the response from server  
res.write("This is response from server ");
res.end();   
});
 // server listening from port 3000
MyServer.listen(4000),()=>{
    console.log("Server is Running");
}
