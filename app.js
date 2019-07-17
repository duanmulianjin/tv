const express=require('express');
const pool=require('./routes/pool.js');
const user=require('./routes/user.js');
const bodyParser=require('body-parser');
const cors=require('cors')
const index=require("./routes/index.js")
var server=express();
server.listen(3000);
console.log("服务器创建成功");
server.use(cors({origin:"*"}))
server.use(express.static('public'));
server.use(bodyParser.urlencoded({
	extended:false
}));
server.use('/index',index);
server.use("/user",user);
server.get('/',(req,res)=>{
	res.sendFile(__dirname+"/public/html/index.html")
})


