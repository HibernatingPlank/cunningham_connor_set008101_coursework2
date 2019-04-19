/*
Class - Web Tec Assesment 1
Name - Connor Cunningham
Email - 40340741@live.napier.ac.uk
}*/


function doCrypt(isDecrypt) { // function 
	var shiftText = document.getElementById("shift").value; //variable  with string
	if (!/^-?\d+$/.test(shiftText)) { // if !/^-?\d+$/ char found 
		alert("Shift is not an integer"); // alert wont shift them
		return;
	}
	var shift = parseInt(shiftText, 10); // variable with string
	if (shift < 0 || shift >= 26) { // anything out of 0 to 26 wont ouput
		alert("Shift is out of range");
		return;
	}
	if (isDecrypt) // decrypt 
		shift = (26 - shift) % 26;
	var textElem = document.getElementById("text"); // variable with sting
	textElem.value = caesarShift(textElem.value, shift);
}

function caesarShift(text, shift) { // function that will shift the text
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var c = text.charCodeAt(i);
		if(65 <= c && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65); 
		else if(97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);
        
		else    
            
    result += text.charAt(i);  // Copy
	}
	return result;
}