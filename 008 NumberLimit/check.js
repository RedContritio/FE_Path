function check()
{
	var iptobj = document.getElementById("iptbox");
	var messagebox = document.getElementById("messagebox");
	if(iptobj.checkValidity() == false)
	{
		messagebox.innerHTML = "<span class=\"IncorrectStyle\">"+ iptobj.validationMessage +"</span>";
	}
	else
	{
		messagebox.innerHTML =  "<span class=\"CorrectStyle\">"+ "Correct" +"</span>";
	}
}

function check2()
{
	var txt = null;
	var iptobj = document.getElementById("iptbox2");
	var messagebox = document.getElementById("messagebox2");
	var iptval = iptobj.value;
	if(!isNumeric(iptval))
	{
		txt = "\"" + iptval + "\" Not A Number";
	}
	else if(iptobj.validity.rangeUnderflow)
	{
		txt = "\"" + iptval + "\" is under the limit";
	}
	else if(iptobj.validity.rangeOverflow)
	{
		txt = "\"" + iptval + "\" is over the limit";
	}
	else
	{
		txt = "\"" + iptval + "\" is a legal input";
	}
	messagebox.innerHTML = txt;
}

function isNumeric(n)
{
	return !isNaN(parseFloat(n)) && isFinite(n);
}