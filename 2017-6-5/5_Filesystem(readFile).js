const http = require('http');
const fs = require('fs');
/*
  fs.readFile    读文件
  fs.writeFile   写文件
*/
http.createServer((req,res)=>{
  fs.readFile('1.txt',(error,data)=>{
    res.write(data);
    res.end();
    //console.log(data.toString());
  });
}).listen(88);