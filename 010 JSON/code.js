var g_data = '{"sites":[' +
	'{"name":"百毒", "url":"www.baidu.com"}' + ',' +
	'{"name":"纸糊", "url":"www.zhihu.com"}' + ',' +
	'{"name":"力扣", "url":"www.leetcode.com"}' + ']}';

var out_i = 0;
function adjustDivBlock()
{
	var ParseData = new Function("data", "i", "return JSON.parse(data).sites[i]");
	var ParseData_anonymous = (data,i) => {return JSON.parse(data).sites[i];};
	var obj = document.getElementById("div_block1");
	var data = ParseData_anonymous(g_data, out_i);
	var di = Math.round(Math.random() * 2)+1;
	if(di >= 3) di = 2;
	out_i = (out_i+di)%3;
	obj.innerHTML = "<p>" + data.name + ": " + data.url + "</p>";
	obj.innerHTML += "<br/><hr/>" + counter();
}

function sum()
{
	var ans = arguments[0];
	for(var i=1; i<arguments.length; i++)
	{
		ans += arguments[i];
	}
	return ans;
}

var counter = (function() {
	var cnt = 0;
	return function(){ return cnt+=1; };
	})();