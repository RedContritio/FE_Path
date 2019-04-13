
function ipt_change()
{
	var ipt_box = document.getElementById("ipt_box");
	ipt_box.value = ipt_box.value.toLowerCase();
}


function 测试块_mouseover()
{
	var block = document.getElementById("一个测试块");
	block.innerHTML = "Mouse Over." + "<br/>But do not click me.";
}
function 测试块_柯雷科()
{
	var block = document.getElementById("一个测试块");
	block.innerHTML = "Damn it!!!!";
}
function 测试块_mouseout()
{
	var block = document.getElementById("一个测试块");
	block.innerHTML = "Mouse Out.";
}

function 插到某块中的A事件以B操作(block,A,B)
{
	if(block.addEventListener){
		block.addEventListener(A, B);
	}else if(block.attachEvent){
		block.attachEvent("on"+A, B);
	}
}

function 移除某块中从A事件的B操作(block,A,B)
{
	if(block.removeEventListener){
		block.removeEventListener(A, B);
	}else if(block.detachEvent){
		block.detachEvent("on"+A, B);
	}
}

var 另一个测试块_柯雷科=(function (){
	var 已插入=false;
	var 悬浮操作=另一个测试块还没插进去的悬浮操作;
	var 离开操作=另一个测试块还没插进去的离开操作;
	return function (){
		var block = document.getElementById("另一个测试块");
		if(已插入)
		{
			移除某块中从A事件的B操作(block, "mouseover", 悬浮操作);
			移除某块中从A事件的B操作(block, "mouseout", 离开操作);
			block.innerHTML = "测试区块二：点击新增监听器";
		} else{
			插到某块中的A事件以B操作(block, "mouseover", 悬浮操作);
			插到某块中的A事件以B操作(block, "mouseout", 离开操作);
			block.innerHTML = "测试区块二：点击移除监听器";
		}
		已插入 = !已插入;
	};
})();

function 另一个测试块还没插进去的悬浮操作()
{
	var block = document.getElementById("另一个测试块");
	block.style.backgroundColor = "#F0F7FF";
	block.style.color = "#0F0800";
}

function 另一个测试块还没插进去的离开操作()
{
	var block = document.getElementById("另一个测试块");
	block.style.backgroundColor = "#0F0800";
	block.style.color = "#F0F7FF";
}