var canva = document.getElementsByTagName("CANVAS")[0];
var msgdiv=document.getElementById("msgbox");
msgdiv.querySelector("a").onclick=function(){
	msgdiv.style="display:none;"
}
var canAdd = [false, false, false, false, false, false];
var keyCode = [1, 8, 5, 4, 5];
var str11 = keyCode.join("");
var bi = canva.getContext("2d");
bi.fillStyle = "#fff";
bi.lineWidth = 1.5;
bi.strokeStyle = "#fff";
bi.font = "18px 微软雅黑";
for (let nu = 0; nu < 5; nu++) {
	bi.fillText(keyCode[nu], 15 + nu * 23, 18);
	bi.beginPath();
	bi.moveTo(10 + nu * 30, 1);
	bi.lineTo(15 + nu * 30, 19);
	bi.stroke();
	bi.beginPath();
	bi.moveTo(30 + nu * 30, 1);
	bi.lineTo(25 + nu * 30, 19);
	bi.stroke();

}
bi.beginPath();
bi.moveTo(3, 3);
bi.lineTo(127, 16);
bi.stroke();
bi.beginPath();
bi.moveTo(3, 16);
bi.lineTo(127, 3);
bi.stroke();


inputs = document.querySelectorAll(".login input");
var divs = document.querySelectorAll(".login>div");
var i = 0;
for (let el of inputs) {
	(function () {
		var n = i;
			el.onblur = function (e) {
			//e.preventDefault();
			var val = e.target.value
			var p = this.nextElementSibling.lastElementChild;
			var div = this.nextElementSibling.firstElementChild;
			if (val == "") {
				p.innerHTML = "此项必填";
				div.innerHTML = "!";
				div.className = "nopass"
				return;
			}
			if (val.search(/\s+/) != -1) {
				p.innerHTML = "此项不能包含空格";
				div.innerHTML = "!";
				div.className = "nopass"
				return;
			}
			//第一个验证
			if (n == 0) {
				if (val.length <= 12 && val.length >= 4) {
					p.innerHTML = "可以使用该昵称";
					div.innerHTML = "√";
					div.className = "pass";
					canAdd[n] = true;
					return;
				} else {
					p.innerHTML = "用户名在4到12个字符间";
					div.innerHTML = "！";
					div.className = "nopass"
					canAdd[n] = false;
					return;
				}
			}
			//第二个验证
			if (n == 1) {
				if (val.search(/[\u4e00-\u9fa5]/) != -1) {
					p.innerHTML = "密码中不能包含中文";
					div.innerHTML = "!";
					div.className = "nopass";
					canAdd[n] = false;
					return;
				}
				if (val.length <= 18 && val.length >= 6) {
					canAdd[n] = true;
					p.innerHTML = "可以使用该字符";
					div.innerHTML = "√";
					div.className = "pass"
					return;
				} else {
					p.innerHTML = "密码在6到18个字符间";
					div.innerHTML = "!";
					div.className = "nopass";
					canAdd[n] = false;
					return;
				}
			}
			//第三个验证
			if (n == 2) {
				var val1 = inputs[1].value
				if (val1 == val) {
					canAdd[n] = true;
					p.innerHTML = "密码一致";
					div.innerHTML = "√";
					div.className = "pass"
					return;
				} else {
					p.innerHTML = "密码不一致";
					div.innerHTML = "!";
					div.className = "nopass";
					canAdd[n] = false;
					return;
				}
			}
			//第四个验证
			if (n == 3) {
				if (val.search(/^1[3-8]\d{9}$/) !== -1) {
					canAdd[n] = true;
					p.innerHTML = "格式正确";
					div.innerHTML = "√";
					div.className = "pass"
					return;
				} else {
					p.innerHTML = "格式不正确";
					div.innerHTML = "!";
					div.className = "nopass";
					canAdd[n] = false;
					return;
				}
			}
			//第五个验证
			if (n == 4) {
				if (val == str11) {
					p.innerHTML = "验证码正确";
					div.innerHTML = "√";
					div.className = "pass"
					canAdd[n] = true;
					return;
				} else {
					p.innerHTML = "验证码不正确";
					div.innerHTML = "!";
					div.className = "nopass";
					canAdd[n] = false;
					return;
				}
			}
			//console.log(div,p);
		}
	})()
	i++
}
var remember = document.getElementById("remember");
remember.onchange = function (e) {
	canAdd[5] = e.target.checked;
}
var but = document.querySelector(".button button");
but.onclick = function () {
	var iscan = 0;
	for (var el of canAdd) {
		if (!el) {
			break;
		}
		iscan++;
	};
	//console.log(iscan);
	if (iscan == 0) {
		alert("用户名不正确 不能提交");
		return;
	} else if (iscan == 1) {
		alert("密码不正确 不能提交");
		return;
	} else if (iscan == 2) {
		alert("两次密码不一致 不能提交");
		return;
	} else if (iscan == 3) {
		alert("手机号码格式不正确 不能提交");
		return;
	} else if (iscan == 4) {
		alert("验证码不正确 不能提交");
		return;
	} else if (iscan == 5) {
		alert("没有同意用户协议 不能提交");
		return;
	} else if (iscan == 6) {
		var url = "http://127.0.0.1:3000/user/add?";
		var str="uname="+inputs[0].value+"&upwd="+inputs[1].value+"&phone="+inputs[3].value;
		url=url+str;
		console.log(url);
		Ajax.get(url).then(result=>{
			result=JSON.parse(result);
			console.log(result)
			if(result.code==1){
				sessionStorage.setItem("uname",result.uname);
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
	}
}


