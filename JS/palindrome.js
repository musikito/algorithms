/*
a function to check if a string is a Palindrome
A palindrome is a word, phrase, number, 
or other sequence of characters which reads the same backward or forward.
*/

function palindrome(str){
    //we use Regex to remove unwantec char in str
    var re = /[\W_]/g; 
    //found another way too:
    //var re = /[^A-Za-z0-9]/g;

    //now we lowercase the string
    var lowRegStr = str.toLowerCase().replace(re,'');
    //this will alow us to lowercase the string and get rid of spaces

    //reverse the "sanitized" string
    //we use split(), reverse(), and join()
    var reverseStr = lowRegStr.split('').reverse().join('');

    //now we check if the result is strictly equal to one another and return True or False

    return reverseStr === lowRegStr;

}//end function palindrome

//use it like this
console.log(palindrome("civic")); //shoukd return true