var visibility=false;
function outlet()
{
	var divblock = document.getElementById("another_div");
	visibility = !visibility;
	if(visibility)
	{
	divblock.innerHTML = 
"<pre>&ltscript.js&gt<br/>\
function BadFunc()<br/>\
{<br/>\
document.getElementById(\"index_body_div\").innerHTML = 23333;<br/>\
}<br/>\
<br/>\
function func()<br/>\
{<br/>\
	try<br/>\
	{<br/>\
		BadFunc();<br/>\
	} catch(Err){<br/>\
		alert(Err);<br/>\
	}finally{<br/>\
		;<br/>\
	}<br/>\
}\";<br/>\
}<br/></pre>";
	}
	else
	{
		divblock.innerHTML = null;
	}
}