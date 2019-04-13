var buttonbegin="<button type=\"button\" onclick=";
var buttonend="</button>";

var NumButtons=0;
var buttons = [""];
function AdjustNav(n)
{
	if(Math.random()>0.5 && NumButtons > n+1)
	{
		NumButtons -= 1;
	}
	else
	{
		buttons[NumButtons] = buttonbegin+"\"AdjustNav("+NumButtons+")\" id=\"Button"+NumButtons+"\">"+NumButtons+buttonend;
		NumButtons += 1;
	}
	document.getElementById("mainnav").innerHTML = null;
	for(var i=0; i<NumButtons; i+=1)
	{
		if(i%10==0) document.getElementById("mainnav").innerHTML += "<br/>";
		document.getElementById("mainnav").innerHTML += buttons[i];
	}
}