// JavaScript Document
/*时钟JS*/
/*送鲜花功能star*/
function chat()
{
	var timer;
	clearInterval(timer);
	var give=document.getElementById("giveFlower");
	//var flw=document.getElementById("get-flower");
	var fbtn=document.getElementById("flower");
	fbtn.onclick=function(){
		give.innerHTML="您送给黄炳圳一朵鲜花";
		var a=document.getElementById("get-flower").innerHTML++;
	}
	
	timer=setInterval(function(){
		fbtn.onmouseout=function(){give.innerHTML="";}
	},1000);
}
/*送鲜花功能end*/
function backIndex(){
	window.location.href="http://hhardyy.com/";
}
/*视频弹幕功能*/

