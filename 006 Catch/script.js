function BadFunc()
{
	document.getElementById("index_body_div").innerHTML = 23333;
}

function func()
{
	try
	{
		BadFunc();
	} catch(Err){
		alert(Err);
	}finally{
		;
	}
}