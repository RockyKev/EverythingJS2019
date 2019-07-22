/* 
Regex Expressions
https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4

Regular expresions are ways to describe patterns in string data. 

example: 

*/

//Regular Expression Constructor: 

var regexConst = new RegExp('abc');

//Regular Expression Literal: 

var regexLiteral = /abc/;


/* 
In a situation where you want to create regular expressions dynamically, regex literal won't work - so you'll need to use a constructor. 
*/

// Testing 

var regex = /hello/;

var str = 'hello world';

var resultTest = regex.test(str);

console.log(resultTest);

// Return array containing matches.

var resultExec = regex.exec(str);

console.log(resultExec)

// returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]
// 'hello' -> is the matched pattern.
// index: -> Is where the regular expression starts.
// input: -> Is the actual string passed.


/* Simplify testing */

var regex2 = /world/;

console.log(regex2.test('hello world'));

/* --------------- */

/* 
Flags: 
g = global search, don't return after the first match. 
i = case-insensitive search

*/

var regexInsensitive = /abc/i;

console.log(regexInsensitive.test('ABC'));

/* --------------- */

/* Character groups 
[xyz] - matches from characters inside the bracket.
[^xyz] - negated, the reverse. 
[a-z] - range
*/

var regexGroup = /[bt]ear/;

console.log("Group1 " + regexGroup.test('bear')); //true
console.log("Group2 " + regexGroup.test('tear')); //true
console.log("Group3 " + regexGroup.test('fear')); //false

/* Meta Characters 
\d -matches any digit [same as 0-9] 
\w - matches any word. [same as a-zA-Z0-9_]
\s - mach a whitespace character
\t - matches a tab
\b - find a beginning or ending of a word. Word boundary. 
. - Maches any character, except new line


\D - matches a non-digit
\W - matches a non-word
\S - matches a nonwhitespace 


+ - Matches a preceding expression 1 or more times. 

* - Maches the preceding expression 0 or more times. 
*/


var regexPlus = /\d+/;

console.log("plus " + regexPlus.test('8')); //true
console.log("plus " + regexPlus.test('899989')); //true
console.log("plus " + regexPlus.test('81232323')); //true

