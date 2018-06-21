/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

//function should accept string
//function should reverse order of string
    //split
    //reverse
    //join
//function should return string

//function(str)
    //string variable = str.split('')
    //array variable = string variable.reverse()
    //reverse array variable = array variable.join('')
//return reverse array variable

var firstReverse = function(str) {
    if(typeof str === typeof '') {
        var stringSplit = str.split('');
        var stringReverse = stringSplit.reverse();
        var stringJoin = stringReverse.join('')
        return stringJoin;
    } else {
        return null;
    }

}


 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

//function should accept string
//function should sort string alphabetically
//function should return sorted string

//function()
    //string split
    //array sort
    //array join

var alphaOrder = function(str) {
  
    if(typeof str === typeof '') {
          var stringSplit = str.split('');
        var stringSort = stringSplit.sort();
        var arrayJoin = stringSort.join('');
        return arrayJoin;
    } else {
        return null;
    }
}


 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

//function should accept a string
//function should check each character in string
//function should match if each character is a vowel
//function should increment a variable upward if each char is a vowel
//function should return vowel variable in string

//function()
    //vowel variable counter
    //for loop iterating over string
        //if(regex vowels)
            //incriment vowel variable counter
        //else do nothing continue for loop
//return number of vowels

var vowelCount = function(str) {
    var vowelCounter = 0;
    if(typeof str === 'string') {
        for (var i = 0; i < str.length; i++) {
            if(str[i].match(/[aeiou]/gi)) {
                vowelCounter+=1;
            }
        }
        return vowelCounter;
    } else {
        return null;
    }
}

// var vowelCount = function(str) {
//     var vowelCounter = 0;
//     for(i = 0; i < str.length; i++) {
//         var isVowelCheck = (str[i].match(/[aeiou]/gi);
//         var isVowel = isVowelCheck.toString();
//         if(isVowel === true) {
//             vowelCounter++;
//         } else {

//         }
//     }
// return vowelCounter;
// }




 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */


/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: null,
    repeatString: null
}