function 文斗肯弗姆()
{
	var res = window.confirm("肯弗姆？");
	var 段落元素 = document.getElementById("肯弗姆输出");
	var 基础内容 = " 肯弗姆结果： ";
	if( res == true )
	{
		肯弗姆输出.innerHTML = 基础内容 + "肯弗姆！";
	}
	else
	{
		肯弗姆输出.innerHTML = 基础内容 + "不肯弗姆~ 😜";
	}
}

function 文斗脯肉普特()
{
	var res = window.prompt("脯肉普特？","脯肉 never mind scadal and libel");
	var 段落元素 = document.getElementById("脯肉普特回执");
	段落元素.innerHTML = res;
}

function move(元素, dx, dy)
{
	var x=parseInt(元素.style.left.substr(0, 元素.style.left.length-2));
	var y=parseInt(元素.style.top.substr(0, 元素.style.top.length-2));

	元素.style.top = y+dy+"px";
	元素.style.left = x+dx+"px";
};
	
var 设置一个简单定时移动的玩意儿 = (function ()
{
	var 状态集合 = {初始状态:0, 移动状态:1, 停止状态:2};
	var 状态 = 状态集合.初始状态;
	var 计时任务 = null;
	var 初始x = "10px";
	var 初始y = "240px";
	
	return function()
	{
		var 玩意儿元素 = document.getElementById("一个沙雕玩意儿");
		var 开关元素 = document.getElementById("简单定时移动装置");
		switch(状态)
		{
			case 状态集合.初始状态:
			{
				玩意儿元素.style.left = 初始x;
				玩意儿元素.style.top = 初始y;
				
				计时任务 = window.setInterval(function(){move(玩意儿元素,1,0)}, 10);
				开关元素.innerHTML = "站住啊！你这红球！";
				
				状态 = 状态集合.移动状态;
				break;
			}
			case 状态集合.移动状态:
			{
				window.clearInterval(计时任务);
				计时任务 = null;
				开关元素.innerHTML = "滚回去呀，你这玩意儿！";
				状态 = 状态集合.停止状态;
				break
			}
			case 状态集合.停止状态:
			{
				开关元素.innerHTML = "跑起来啊！";
				玩意儿元素.style.left = 初始x;
				玩意儿元素.style.top = 初始y;
				状态 = 状态集合.初始状态;
				break;
			}
		}
	};
})();