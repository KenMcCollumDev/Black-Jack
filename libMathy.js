var Mathy = {
    /*    Write a function that will give you the factorial of any given number (https://www.google.com/search?q=factorial). The function should take in a number and return the final value. Example: an input of 4 should return a value of 24.  */
	factorial: function(givenNumber){
		var result = 1;	
		for (var loopCounter = givenNumber; loopCounter > 1; loopCounter--){
		result = result * loopCounter; 
		//console.log(loopCounter); //console.log(givenNumber);
	}
	 //console.log(result);
	 return result;
     },


	 bucketedRandomSpectrum: function(lowerBound,upperBound){
		/*this function randomly chooses numbers within a specified range*/
		var randy = Math.random(); 
		var bucketedRandom = Math.floor(randy /(1/(upperBound - lowerBound + 1))); /*Kens Original Recipe: (1) get the range and divide into buckets.  (2) get the random number (3) divide it and round down to find the bucket*/
		return bucketedRandom; /*its finger licking good yall*/
	},//closes function bucketedRandomSpectrum


	/*    Given an array of values. Please create a function that will return a randomized version of the array. For example, if you give the function an array [1,2,3,4,5], it will randomize the array and return something like [4,2,3,1,5] or [1,4,2,5,3], etc.*/
	randomizeArrayPositions: function(orderedArray){
		var orderedArrayLength = orderedArray.length - 1;
		for (var loopCounter = 0; loopCounter < orderedArrayLength; loopCounter++){
		var swap = orderedArray[loopCounter];
		var randomPosition = Mathy.bucketedRandomSpectrum(0,orderedArrayLength);
		//get the randomized position for the orderedArray element to be placed in the randomizedArray
		orderedArray[loopCounter]=orderedArray[randomPosition]; orderedArray[randomPosition] = swap;
		//Fisher Yates sort: for each orderedArray element put it in a random position within the randomizedArray and place the element that was already there in the vacated position
		}
	return orderedArray;
	//console.log(orderedArray);
	},//closes function randomizeArrayPositions


    /*    Write a function that will score a string based on uniqueness. For each occurrence of the character in the string, it will increment the score for that character by 1.
        Assume string will only be 0-9 and lowercase a-z and spaces.   
        Examples: abc => a (1) + b (1) + c (1) = 3
        aabbcc => a(1) + a(2) + b (1) + b (2) + c (1) + c (2) = 6
        aaabcc => a(1) + a(2) + a(3) + b(1) + c(1) + c(2) = 10 */
	scoreString: function(strimg){
       var counts =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; /*a 36 member scoring array to track the occurrence of the 26 alphabet letters + 10 numbers listed next*/
       var characterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
        for (var loopCounter = 0; loopCounter < strimg.length; loopCounter++) {
            counts[characterArray.indexOf((strimg.toLowerCase()[loopCounter]))]++; /*for each character in the word, convert to lower case & get the letter and increase the count of that letter by 1 in the scoring array.*/
        }
    console.log(counts + counts.length);
    },	//closes function scoreStrimg   

} // closes libMathy
module.exports = Mathy;
/*
Test Cases


console.log(Mathy.factorial(4));
console.log(Mathy.factorial(14));

//this format can work

console.log(Mathy.bucketedRandomSpectrum(1, 15));
console.log(Mathy.bucketedRandomSpectrum(1, 15));
console.log(Mathy.randomizeArrayPositions([1,2,3,4,5]));

Mathy.scoreString("Supercalifragilisticexpialidoceous");
Mathy.scoreString("Television");
Mathy.scoreString("Heather");
Mathy.scoreString("Garfield12323");
*/















