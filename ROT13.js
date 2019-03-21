/*
Class - Web Tec Assesment 1
Name - Connor Cunningham
Email - 40340741@live.napier.ac.uk
}*/

function encode()
{ 
    
    var plain_text = document.getElementById("message").value; // variable with string 
    var cypher_text = []; // input variable box 
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',' q','r','s','t','u','v','w','x','y','z'] // variable text alphabet
    
    for(var idx=0; idx<plain_text.length; idx++)
{ 
    input = alphabet.indexOf(plain_text[idx]); 
    if(input == -1 )
{ 
    cypher_text.push(plain_text[idx]);
} 
    else
{
    var coded = (input+13)%26;
    var letter = alphabet[coded];
    cypher_text.push(letter); }
} 
    document.getElementById("output").innerHTML = cypher_text.join("");
}


function decode() // decode function
                { 
    
    var plain_text = document.getElementById("output").value; // variable with string
    var cypher_text = []; // input for text
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',' q','r','s','t','u','v','w','x','y','z'] // variable text alphabet
    
    for(var idx=0; idx<plain_text.length; idx++)
    { 
    input = alphabet.indexOf(plain_text[idx]); 
    if(input == -1 )
        { 
    cypher_text.push(plain_text[idx]);
        }
    
    else
{
        var decode = (input+13)%26; // variable for decode.....
        var letter = alphabet[docode]; // variable .....
        cypher_text.push(letter);
}
    }
    
    document.getElementById("decode_output").innerHTML = cypher_text.join(""); //deocdes the sring in plane text
                            
                            }
                            
                            
                        
                            
