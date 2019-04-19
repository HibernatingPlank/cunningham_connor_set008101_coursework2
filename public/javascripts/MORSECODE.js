/*
Class - Web Tec Assesment 1
Name - Connor Cunningham
Email - 40340741@live.napier.ac.uk
}*/

var morsecode=new Array(36); // Array with the morse code, letter and  . and -
morsecode["a"]="._";
morsecode["b"]="_...";
morsecode["c"]="_._.";
morsecode["d"]="_..";
morsecode["e"]=".";
morsecode["f"]=".._.";
morsecode["g"]="__.";
morsecode["h"]="....";
morsecode["i"]="..";
morsecode["j"]=".___";
morsecode["k"]="_._";
morsecode["l"]="._..";
morsecode["m"]="__";
morsecode["n"]="_.";
morsecode["o"]="___";
morsecode["p"]=".__.";
morsecode["q"]="__._";
morsecode["r"]="._.";
morsecode["s"]="...";
morsecode["t"]="_";
morsecode["u"]=".._";
morsecode["v"]="..._";
morsecode["w"]="._";
morsecode["x"]="_.._";
morsecode["y"]="_.__";
morsecode["z"]="__..";
morsecode["1"]=".____";
morsecode["2"]="..___";
morsecode["3"]="...__";
morsecode["4"]="...._";
morsecode["5"]=".....";
morsecode["6"]="_....";
morsecode["7"]="__...";
morsecode["8"]="___..";
morsecode["9"]="____.";
morsecode["0"]="_____";

var temp='' // variable text box for code above 

function encode() {
document.morsecode.morse.value=document.morsecode.morse.value.toLowerCase();
document.morsecode.codebox.value=""; //text box or user input
temp=''
var morse=document.morsecode.morse.value.split("");

for (a=0; a<morse.length; a++) {
if (morse[a]!=" ") {
if (window.morsecode[morse[a]]) {
document.morsecode.codebox.value+=morsecode[morse[a]]+"    ";
temp+=morse[a]+"="+morsecode[morse[a]]+"\n";
}
else
temp+=morse[a]+"=(None)\n";
}
else temp+="\n";
}
document.morsecode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp // this will output the explanation of the morse code
}