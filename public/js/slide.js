//import { clearInterval } from "timers";

//import { isNumber } from "util";
//未完成事项
//当显示为第一张时的动画效果
//(function(){
var showUl=document.querySelector("[class=showImg]");
var nextImg=document.querySelector("[class=nextImg]");
var priorImg=document.querySelector("[class=priorImg]");
var ulIdex=document.querySelector(".showIdex");
var indexs=document.querySelectorAll(".showIdex>li");
//
var i=0;
var canShow=true;
var a=0;
var show=function(num){
	//让用户0.5秒内只能点一次
if(canShow){
		canShow=false;
		setTimeout(()=>{
			canShow=true
			},1000)}else{
			return ;
		}
		if(num||num==0){i=num};
		//当播放到最后一张 待过渡效果结束 瞬间将边距和i清零 由于速度极快 几乎不可见
		if(i==4){
			setTimeout(()=>{
				i=0;
				showUl.style.transition="none";
				showUl.style.marginLeft=0;
				setTimeout(()=>{
					showUl.style.transition="all .5s linear";
				},500)
			},500)
		};
		if(i<0){
			showUl.style.transition="none";
			showUl.style.marginLeft=-4*990+'px';
			i=3;
			indexs[i].style="background:#f66;"
			setTimeout(()=>{
				
				showUl.style.transition="all .5s linear";
				showUl.style.marginLeft=-3*990+'px';
			},100)
			return ;
		}
		//先使得所有的位置指示器背景清空
		for(let elem of indexs){
			elem.style="background:#fff"
		}
		//使得位置指示器的和图片位置一致 但是最后一张的情况另算
		if(i==4){
			indexs[0].style="background:#f66;"
		}else{
			indexs[i].style="background:#f66;"
		}
		a=i*-990+"px";
		showUl.style.marginLeft=a
		} 
		var time=setInterval(()=>{
		 	i++;
		 	show();
		},3000);
		showUl.onmouseover=function(){clearInterval(time)}
		showUl.onmouseout=function(){time=setInterval(()=>{
							i++;
							show();
						},3000);
			}
	
		//上一张
	nextImg.onclick=function(){
		if(canShow){
			i++
		show();
	};
		}
		//下一张
	priorImg.onclick=function(){
		if(canShow){
			i--		
			show();
		}
	}
		//位置指示器
			ulIdex.onclick=function(e){
				if(!(e.target.tagName=="LI")){
					return;
				}
				var num=Number(e.target.innerHTML);
				if (num==0){
					show(num-1);
					return;
				}
				show(num-1);
	}