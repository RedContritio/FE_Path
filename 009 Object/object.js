var students = new Array();
var table_title = " Students List";
var table_begin;
			
var table_tail = "</table>";

var NumOfStudents = 0;
function CustomedOperation()
{
	;
}

function adjustList()
{
	table_begin = "<table border=\"1\">" + "<tr><th colspan=\"2\"><h2>" + table_title + "</h2></th></tr>" + "		<tr><td>name</td><td>id</td></tr>";
	
	var obj = document.getElementById("student_list");
	var content = table_begin;
	for(var i=0; i<NumOfStudents; i++)
	{
		content += "<tr><td>" + students[i].name + "</td><td>" + students[i].id + "</td></tr>";
	}
	content += table_tail;
	obj.innerHTML = content;
	CustomedOperation();
}

function addNewStudent()
{
	var iptname = document.getElementById("student_name");
	var iptid = document.getElementById("student_id");
	if(isIllegalStr(iptname.value) || isIllegalStr(iptid.value))
		return;
	students[NumOfStudents] = {name       : iptname.value,
							   id         : iptid.value,
							   fullLength : function(){
								   return this.name.length() + this.id.length();
							   }};
	NumOfStudents ++;
	adjustList();
}

function isIllegalStr(str)
{
	str = str.replace(/(^\s*)|(\s*$)/g,'');
	if(str == '' || str == undefined || str == null)
	{
		return true;
	}
	return false;
}