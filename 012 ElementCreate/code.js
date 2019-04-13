

var 巴腾柯雷科 = (function (){
	var paraCnt = 0;
	return function(){
		var para = document.createElement("p");
		para.id = "艾迪希尔瑞斯"+paraCnt;
		var node = document.createTextNode("又一个段落");
		para.appendChild(node);
		var ele = document.getElementById("测试布勒克");
		ele.appendChild(para);
		paraCnt ++;
	}
})();

var 修改指定id的paragraph内容 = (function (){
	var defaultInputBackgroundColor = "transparent";
	var incorrectInputBackgroundColor = "#F0A0A0";
	return function(){
		var ID输入框 = document.getElementById("根据id改内容_原始id");
		
		var id=ID输入框.value;
		var 被修改对象=document.getElementById(id);
		var 新内容=document.getElementById("根据id改内容_新内容").value;
		ID输入框.style.backgroundColor = defaultInputBackgroundColor;
		if(被修改对象 == null)
		{
			if(id.length > 0 )ID输入框.style.backgroundColor = incorrectInputBackgroundColor;
			return ;
		}
		被修改对象.innerHTML = 新内容;
		document.getElementById("根据id改内容_新内容").value = "";
	}
})();

var 修改指定内容的paragraph内容 = (function (){
	var defaultInputBackgroundColor = "transparent";
	var incorrectInputBackgroundColor = "#F0A0A0";
	return function(){
		var 原内容框 = document.getElementById("根据内容改内容_原内容");
		
		var 原内容=原内容框.value;
		var 新内容=document.getElementById("根据内容改内容_新内容").value;
		var 段落元素集合=document.getElementsByTagName("p");
		var 实际修改数量=0;
		for(var i=0; i<段落元素集合.length; i++)
		{
			if(段落元素集合[i].innerHTML == 原内容)
			{
				段落元素集合[i].innerHTML = 新内容;
				实际修改数量 ++;
			}
		}
		if(实际修改数量 <= 0 )
		{
			原内容框.style.backgroundColor = incorrectInputBackgroundColor;
		}
		else
		{
			原内容框.style.backgroundColor = defaultInputBackgroundColor;
		}
	}
})();