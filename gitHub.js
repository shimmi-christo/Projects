//Find PI to the Nth Digit - Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go.


//var numPi = document.getElementById("numPi");
//
//numPi.addEventListener("input", piDigits);
//
//
//function piDigits() {
//    var digits = parseFloat(numPi.value);
//    
//    if ( digits > 20 || digits === NaN ) {
//        digits = 20;
//    }
//        var n = Math.PI.toFixed(digits);
//
//    pi.innerHTML = n;
//};







//<!--    *******************************************************     -->

////Find e to the Nth Digit - Just like the previous problem, but with e instead of PI. Enter a number and have the program generate e up to that many decimal places. Keep a limit to how far the program will go.
//
//var num = document.getElementById("num");
//num.addEventListener("input", getDec);
//
//function getDec () {
//    var numInput = parseFloat(num.value);
//
//    if (numInput > 20 ){
//        numInput = 20;
//    }
//    var n = numInput.toFixed(numInput);
//    
//    dec.innerHTML = n;
//}








//<!--    *******************************************************     -->

//Fizz Buzz - Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.


//document.getElementById("fizz").innerHTML;
//
//for(i=1; i<=100; i++){
//    if((i % 3 == 0)&&(i % 5 == 0) ){ 
//        document.write("fizzbuzz <br>");
//    }else if(i % 5 == 0){
//            document.write("buzz <br>");
//    }else if(i % 3 == 0){
//            document.write("fizz <br>");
//    }else {   
//            document.write(i + "<br>");
//        }
//}

//<!--    *******************************************************     -->

//Reverse a String - Enter a string and the program will reverse it and print it out.
// WAY NUMBER 1
//var wordInsert = document.getElementById("word");
//var rev = document.getElementById("rev");
//
//wordInsert.addEventListener("blur", reverseString);
//
//function reverseString(){
//    var one = wordInsert.value;
//    rev.innerHTML = one.split("").reverse().join("");;
//
//}
// WAY NUMBER 2
//function reverseWord(insertWord){
//    return insertWord.split("").reverse().join("");
//}
//console.log(reverseWord("happy"));



//<!--    *******************************************************     -->
//Pig Latin - Pig Latin is a game of alterations played on the English language game. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Read Wikipedia for more information on rules.

//var vowels = ["a","e","i","o","u"];
//var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
//    
//function pigWord(insertWord) {
//        var originalWord = insertWord.split("");
//        var shifted = originalWord.shift();    
//    if (consonants.indexOf(shifted) > -1) {
//        originalWord.push(shifted+"ay");
//    } else{
//        originalWord.unshift(shifted);
//        originalWord.push("ay");
//    }
//    return originalWord.join("");
//}; 
//    console.log(pigWord("apples"));

//WAY NUMBER 2

function igpayAtinlay(str) {
	var returnArray = [],
		wordArray = str.split(' ');

	for (var i = 0; i < wordArray.length; i++) {
		var word = wordArray[i];
		var beginning = word.charAt(0);

		if (/[aeiouAEIOU]/.test(beginning)) {
			returnArray.push(word += 'way');
			continue;
		}

		for (var ii = 1; ii < word.length; ii++) {
			if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
				break;
			} else {
				beginning += word.charAt(ii);
			}
		}

		returnArray.push(word.substr(beginning.length) + beginning + 'ay');
	}
	return returnArray.join(' ');
}

console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"

//<!--    *******************************************************     -->




