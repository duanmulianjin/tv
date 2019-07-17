console.log("sss");
var islogin=document.getElementById("islogin");
var atlogin=sessionStorage.getItem("uname")==null?false:true;
if(atlogin==true){
    islogin.innerHTML=`欢迎你 ${sessionStorage.getItem("uname")}
        <button id="outLogin">退出登录</button>
    `
    var outLogin=document.getElementById("outLogin");
    outLogin.style+=`font-size:12px;
                    color:#f00;
                    background:#236663;
                    border:0;
                    border-radius: 2px;
                    width:60px;
                    height:20px;
                    `
    outLogin.onclick=function(){

        sessionStorage.removeItem("uname");
        islogin.innerHTML=`<a href="html/login.html">你还没有登录 请登录</a>`
    }
}else{
    islogin.innerHTML=`<a href="html/login.html">你还没有登录 请登录</a>`
}