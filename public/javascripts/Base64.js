// encode string to base64
function encode() // function for encode 
{
var txt = document.getElementById("txt1").value; // variable for user text
var result = btoa(txt);
document.getElementById("txt2").value = result; //take the user and enccripts it
}
// decode base64 back to original string
function decode()
{
var txt = document.getElementById("txt3").value;//takes user decript code
var result = atob(txt);// decodes text back to normal OG text
document.getElementById("txt4").value = result;
}