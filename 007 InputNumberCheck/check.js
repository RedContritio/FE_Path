function check()
{
	var outbox = document.getElementById("check_res");
	var NumStr = document.getElementById("inputnumber").value;
	var NumValue = parseFloat(NumStr);
	if(isNaN(NumValue))
	{
		outbox.innerHTML = "\"" + NumStr + "\" is not a number.";
	}
	else
	{
		outbox.innerHTML = "\"" + NumStr + "\" is " + NumValue + " .";
	}
}

function validateForm()
{
	var x=document.forms["myform"]["awtbox"].value;
	var atPos=x.indexOf("@");
	var dotPos=x.lastIndexOf(".");
	if(atPos < 1 || dotPos < atPos+2 || dotPos+2 >= x.length)
	{
		alert("Illegal Address");
		return false;
	}
	return true;
}