<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title> JAVA-SCRIPT</title>
</head>

<body>


<form id="calculation">

<table>


<tr>

<td> num1 </td>
<td> <input type="text" name="textfeild1" value="" id="num1" /> </td>
</tr>

<tr>
<td> num2 </td>
<td> <input type="text" name="textfeild2" value="" id="num2" /> </td>
</tr>

<tr>
<td> num3 </td>
<td> <input type="text" name="textfeild3" value="" id="num3" /> </td>
</tr>

<tr>
<td> ans </td>
<td> <input type="text" name="add" value="" id="ans"  /> </td>
</tr>

<tr>
<td> total </td>
<td> <input type="button" name="add" value="add" id="add" onclick="adwd()"/> </td>
</tr>


</table>
</form>


<script language="javascript" type="text/javascript">

//add() javascript ka pana function hai 
function adwd(){

num1=document.getElementById("num1").value;
//alert(num1);

num2=document.getElementById("num2").value;
//alert(num2);

//element ki spling thek nhi thi 
num3=document.getElementById("num3").value;
//alert(num3);


ans1=document.getElementById("ans").value;



total = parseInt(num1) + parseInt(num2) + parseInt(num3);
alert(total);

document.getElementById("ans").value= total;
//or total ki value ans ki value mai save hojae 
}

</script>




</body>
</html>
