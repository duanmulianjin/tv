var inps=document.getElementsByTagName("input");
var canlogin=[false,false]
inps[0].onblur=function(){
    var val=this.value;
    var p = this.nextElementSibling.lastElementChild;
    var div = this.nextElementSibling.firstElementChild;
    if (val.search(/^1[3-8]\d{9}$/) !== -1) {
        canlogin[0] = true;
        p.innerHTML = "格式正确";
        div.innerHTML = "√";
        div.className = "pass"
        return;
    } else {
        p.innerHTML = "格式不正确";
        div.innerHTML = "!";
        div.className = "nopass";
        canlogin[0] = false;
        return;
    }
}
inps[1].onblur=function(){
    var val=this.value;
    var p = this.nextElementSibling.lastElementChild;
	var div = this.nextElementSibling.firstElementChild;
    if (val.search(/[\u4e00-\u9fa5]/) != -1) {
        p.innerHTML = "密码中不能包含中文";
        div.innerHTML = "!";
        div.className = "nopass";
        canlogin[1] = false;
        return;
    }
    if (val.length <= 18 && val.length >= 6) {
        canlogin[1] = true;
        p.innerHTML = "可以使用该字符";
        div.innerHTML = "√";
        div.className = "pass"
        return;
    } else {
        p.innerHTML = "密码在6到18个字符间";
        div.innerHTML = "!";
        div.className = "nopass";
        canlogin[1] = false;
        return;
    }
}
var btn=document.querySelector(".button button");
console.log(btn);
btn.onclick=function(){
    if(canlogin[0]==true&&canlogin[1]==true){
        var url=`http://127.0.0.1:3000/user/login?phone=${inps[0].value}&upwd=${inps[1].value}`;
        Ajax.get(url).then(result=>{
            result=JSON.parse(result);
            console.log(result);
            if(result.code==1){
                sessionStorage.setItem("uname",result.data[0].uname);
                msgdiv.querySelector("sapn").innerHTML=result.msg;
				msgdiv.style="display:block;"
				setTimeout(()=>{
					location.href="http://127.0.0.1:3000";
				},3000)
            }else{
                msgdiv.querySelector("sapn").innerHTML=result.msg;
				msgdiv.style="display:block;"
				setTimeout(()=>{
					msgdiv.style="display:none;"
				},3000)
            }
        })
    }else{alert("堆叠")}
}

var msgdiv=document.getElementById("msgbox");
msgdiv.querySelector("a").onclick=function(){
	msgdiv.style="display:none;"
}