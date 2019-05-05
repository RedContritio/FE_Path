
var 计算段落_href的值 = (function ()
{
	var 已经计算=false;
	return function()
	{
		if(已经计算==false)
		{
			var 段落元素=document.getElementById("段落_href");
			段落元素.innerHTML += location.href;
			已经计算=true;
		}
	}
})();

var 计算段落_pathname的值 = (function ()
{
	var 已经计算=false;
	return function()
	{
		if(已经计算==false)
		{
			var 段落元素=document.getElementById("段落_pathname");
			段落元素.innerHTML += location.pathname;
			已经计算=true;
		}
	}
})();

function 加载012练习项目页面()
{
	window.location.assign("../012 ElementCreate/index.html");
}

function 左倾()
{
	window.history.back();
}

function 右倾()
{
	window.history.forward();
}