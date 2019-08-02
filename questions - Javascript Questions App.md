# Easy

## Test 1

### 1. What is the value of "result"?

```
const array = [1, 2, 3];
const result = array[3];
```

* undefined
* 3 
* null
* throws a syntaxError

<details><summary>ANSWER</summary>undefined</details>

### 2. What is the value of "result"?

```
const obj = Object.assign({
  name: "JavaScript"
}, {
  name: "ECMAScript"
}, {
  name: "LiveScript"
});
```

* JavaScript
* LiveScript 
* JavaScript,ECMAScript,LiveScript
* ECMAScript
* undefined

<details><summary>ANSWER</summary>LiveScript
  <p> If they have the same key, it will be overwritten. Later sources also overwrite earlier ones. </p></details>
  
  ### 3. What is the value of "result"?

```
const array = [1, 2, 3, 5];
const result = array.indexOf(3);

```

* -1
* 2
* 5
* 3

<details><summary>ANSWER</summary>2
  <p> This is not saying "index 3" of the array. It's saying "the number 3" within the array. 
    The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf</p></details>

 ### 4. Which of this is the same as "result += value"?

* result = value
* result = value + value
* result = ++ value
* result = result + value
* result = value++

<details><summary>ANSWER</summary>resi;t = result + value</details>


### 5. What is the value of "result"?

```
const o = {
  name: "Brendan"
};
const s = JSON.parse(JSON.stringify(o));
result = s === o;

```

* true
* false

<details><summary>ANSWER</summary>false
  <p> They both create "Object { name: "Brendan" }", but jSON.parse() creates a new object. So they're different. </p></details>


### 6. What is the value of "result"?

```
const result = "2009" - "1995";
```

* undefined
* NaN
* throw a TypeError
* null
* 14

<details><summary>ANSWER</summary>14
  <p> JS will try to convert them both into numbers before evaluating. If it can't, it'll throw a NaN.</p></details>


### 7. which of these is not a logical operator?

* &&
* !
* ||
* |

<details><summary>ANSWER</summary>|</details>


### 8. What is the value of "result"?

```
const re = /java/i;
const str = "JavaScript";
const result = re.test(str);

```

* true
* false

<details><summary>ANSWER</summary>true
  <p> The test() method sees if the regex is in the variable, outputting true/false. the "i" flag is used for case insensitivity.</p></details>


## Test 2

### 1. What is the value of "result"?

```
const value = 20.0;
const result = Number.isInteger(value);
```

* false
* true

<details><summary>ANSWER</summary>true
  <p> 20.0 to JS becomes 20, which is a integer. If you had 20.1, then it would NOT be a integer. </p></details>
  

### 2. What is the correct JavaScript comment syntax?

* // Comment //
* /* Comment */
* / Comment /
* << Comment >>

<details><summary>ANSWER</summary> /* Comment */
</details>
  

### 3. What is a incorrect Variable name?

```
* _result
* _2result
* r1e2s3u4l5t
* $result
* 2result
```

<details><summary>ANSWER</summary> 2result
  <p> Don't start variables with numbers. It can be letters, or _ and $.  </p>
</details>
  
 ### 4. What is the value of "result"?

```
const func = function (a, b) {
  return arguments.length;
}

const result = func(4, 3, 2, 1);
```

* 2
* undefined
* 0
* 4

<details><summary>ANSWER</summary>4
  <p> 
  JavaScript does not throw an error if the number of arguments passed during a function invocation are different than the number of parameters listed during function definition. 
   
```    
// Basic function with three parameters that logs the sum of all the parameters
function argCheck(parameter1, parameter2, parameter3){
  console.log(parameter1 + parameter2 + parameter3);
}

// Function with extra arguments
argCheck(1,2,3,4);
// Logs 6 (1 + 2 + 3, ignores 4)

// Function with missing arguments
argCheck(1,2);
// Logs NaN because by default if a corresponding argument is missing, it is set to undefined. 
// parameter3 is assigned undefined and so 1+2+undefined = NaN
``` 
    
  https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04 </p></details>
   
### 5. What is the value of "result"?

```
const result = 95;
const RESULT = 2009;
const Result = 262;
```

* 262
* 95
* throw a TypeError
* 2009

<details><summary>ANSWER</summary>95
  <p> They are all different variables. </p></details>
  


### 6. What is the value of "result"?

```
let value = 95
const result = value++;
```

* 97
* -95
* 96
* 95

<details><summary>ANSWER</summary>95
  <p> The increment operator (++) is AFTER the value. So the order is to
    1. pass value (95) to 'result'
    2. Add 1 (the ++)  
    It never gets stored, since it's after the pass.
  </p></details>
  
  
### 7. What is the value of "result"?

```
const str = "JavaScript";
const result = str.length;
```

* 10
* 11
* 2
* 9
* undefined

<details><summary>ANSWER</summary>10
  <p> The length of the string. </p></details>
  
  
### 8. Is JavaScript case sensitive?


* true
* false

<details><summary>ANSWER</summary>true</details>

## Test 3
### 1. What is the value of "result"?

```
const func = function () {
  return 2009;
}
const result = 262 && func();
```

* false
* true
* 2009
* 262

<details><summary>ANSWER</summary>2009
  <p> This one is confusing> The && returns the left operand if it is false, otherwise... it returns the right operand. </p></details>
  
  
 ### 2. What is the value of "result"?

```
const value = new Set([1, 2, 3]);
value.add(1);
const result = value.size;

```

* 3
* 4
* undefined
* 2

<details><summary>ANSWER</summary>3
  <p> The Set object lets you start UNIQUE values of any type. A value can occur only once. There's already a '1' value, so it ignored it. </p></details>
  
  ### 3. What is the value of "result"?

```
const result = ~~(12.34);
```

* 12.34
* -12
* 12
* -12.34

<details><summary>ANSWER</summary>12
  <p> the bitwise not (~) inverts all the bits of the operand and return a number. It removes the decimal.
  </p></details>
  

### 4. What is the value of "result"?

```
const result = "1_2_3".split("_");

```

* 123
* ["1", "2", "3"]
* [1, 2, 3]

<details><summary>ANSWER</summary>["1", "2", "3"]
  <p> the split method splits a string object into an array of strings, using the separator string.
  </p></details>
  
  
  ### 5. What is the value of "result"?

```
const f = (r, v) => r + v;
const result = [1, 2, 3].reduce(f, 0);
```

* 5
* 0
* 6

<details><summary>ANSWER</summary>6
  <p> 
  the reduce() method applies a function to the array, and goes through each element to reduce it to a single value.
  </p></details>
  
  
### 6. What is the value of "result"?

```
const array = [1, 2, 3];
array.shift();
const result = array;
```

* throw a TypeError
* [undefined, 1, 2, 3]
* [2, 3]
* [1, 2, 3]

<details><summary>ANSWER</summary>[2, 3]
  <p> The shift() method removes the first element of the array. </p></details>
    
### 7. What is the value of "result"?

```
const isTrue = false;
const result = isTrue ? 2009 : 262;
```

* 2009
* 262

<details><summary>ANSWER</summary>262
  <p> This is a ternary operator. If true, then return the 2009 value. It's false, so it returned 262.</p></details>
      
    
    
### 8. How to convert an object into a string?

* JSON.parse()
* JSON.valueOf()
* JSON.toString()
* JSON.stringify()

<details><summary>ANSWER</summary> JSON.stringify()
  <p> </p></details>
     
     
## Test 4
### 1. What is the value of "result"?

```
const result = 3 ** 3;
```

* 6
* throws a SyntaxError
* 27
* 12
* 9 

<details><summary>ANSWER</summary> 27
  <p> The ** raises the first operand to the power of the second operand.
  </p></details>
  
### 2. What is the value of "result"?

```
cpmst result = !!null
```

* NaN
* true
* false

<details><summary>ANSWER</summary> false
  <p> (!) returns false. 
      (!!) returns true.
      null returns false.
      !null returns true.
      !!null returns false.
  
  </p></details>
    
    
### 3. What is the value of "result"?

```
const result = Math.round (19.95);
```

* 20
* NaN
* 19

<details><summary>ANSWER</summary>20
  <p> 
    round returns the value rounded to the neares integer.
  </p></details>
      
      
 
### 4. What is the value of "result"?

```
const value = Math.PI;
const result = Math.ceil(value);
```

* 4
* NaN
* 3
* Undefined

<details><summary>ANSWER</summary>2009
  <p> 
    Math.PI gives you 3.14159. 
    Ceil rounds up.
  </p></details>
           

### 5. What is the value of "result"?

```
let value = 0;

do {
  value += 1;
  } while (false); 
  
  const result = value;
```

* throw a ReferenceError
* 1
* 0
* 10

<details><summary>ANSWER</summary>1
  <p> 
    do loops are always executed once.
  </p></details>
                 
                 
                 
                
### 6. Which is not a primative data type in JavaScript?

* number
* boolean
* undefied
* string
* char

<details><summary>ANSWER</summary>2009
  <p> 
    A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JS, there are 6 primpitive data types: string, number, boolean, null, undefined, symbol.
  </p></details>
 
 

### 7. What is the value of "result"?

```
const array = [1, 2, 3];
const result = array.join();

```

* 1 2 3
* 6
* 123
* throws a typeError
* 1, 2, 3

<details><summary>ANSWER</summary>1,2,3
  <p> 
    The join method joins all elements of an array into a string and returns that string. There's a option to add a separator, but if ommitted, they are separated by a comma.
  </p></details>
       
       
    
### 8. What is the value of "result"?

```
let text = "ECMAScript"
const result = text.charAt(1);
```

* E
* C
* M
* A

<details><summary>ANSWER</summary>C
  <p> 
    Arrays start at 0.
  </p></details>
         

## Test 5
### 1. What is the value of "result"?

```
const str = "JavaScript";
const result = str.replace(/a/g, "e");
```

* JeveScript
* JevaScript
* ECMAScript
* JaveScript

<details><summary>ANSWER</summary> JeveScript
  <p> 
    replace() methods replaces strings. The 'g' flag is a global search.
  </p></details>
    
### 2. What is the value of "result"?

```
const result = typeof false;
```

* boolean
* null
* false
* number
* true 

<details><summary>ANSWER</summary> boolean
  <p> 
typeof operator returns a string indicating the type of operand.
  </p></details>
    
### 3. What is the value of "result"?

```
var prop = 1;
var prop = 2;

const result = prop;

```

* 3
* 1
* null
* throw a SyntaxError
* 2

<details><summary>ANSWER</summary> 2
  <p> 
You can declare a var statement with the same name multiple times.
  </p></details>
    
    
### 4. What is the value of "result"?

```
const array = [1, 2, 3];
const result = array instanceof Array;
```

* true
* throw a TypeError
* false

<details><summary>ANSWER</summary> true
  <p> 
 The "instanceof" operator tests weather the prototype property of a constructor appears anywhere in the protoype chain of an object.
  </p></details>
    
### 5. What is the value of "result"?

```
let numbers = [262, 2009, 95];
let [first, second, third] = numbers;

result = second
```

* 2009
* 262
* 95
* 3

<details><summary>ANSWER</summary> 2009
  <p> 
 The destructuring assignment is a JavaScript expression to unpack values from arrays, properties from objects, into dinstct variables.
  </p></details>
    
### 6. What is the value of "result"?

```
const a = [1, 2, 3, 4, 5];
const sliced = a.slice(1, a.length - 1); 
const result = sliced.join("");
```

* 34
* 2345
* 234
* 23
* 3

<details><summary>ANSWER</summary> 234
  
  <p> 
  The slice() method returns a shallow copy of a portion of an array.
  slice (beginning, end). The original array will not be modified. 
  join() returns it into a string.
  </p></details>
    
### 7. Which of the following method is used to get the last element in array?


* unshift()
* shift()
* pop()
* push()

<details><summary>ANSWER</summary> pop()
  
  <p> 
pop() removes the last element from an array and returns taht element. This changes the array.
  </p></details>
    
### 8. What is the value of "result"?

```
const number = 12.3456;
const result = number.toPrecision(2);
```

* 12.34
* 12
* 12.4
* 12.35
* 12.3

<details><summary>ANSWER</summary> 234
  
  <p> 
  toPrecision(2) returns a string representing the Number object to a specified precision. Provided x total length of string.
  toFixed() method formats a number using a fixed-point notation. Provides (n) length after the decimal point.
  
  </p></details>
    
## Test 6
### 1. What is the value of "result"?

```
const result = "ECMAScript".slice(1, -1)
```
* CMA
* ECMAScrip
* CMAScrip
* CM

<details><summary>ANSWER</summary> CMAScrip
  
  <p> 
  The slice(BeginningIndex, EndIndex) method extracts a section of a string and returns it as a new string, without modifying the original. If negative, it treats as strLength + beginIndex. EndIndx is optional.
  </p></details>
    

### 2. What is the value of "result"?

```
const array = [1, 2, 3];
array.push(4);
array.pop();
const result = array.length;
```

* 4
* undefined
* 3
* 5
* 2

<details><summary>ANSWER</summary> 
  
  <p> 
 push() method adds an element to the end of the array. pop() removes the last element of the array, and returns that element. 
  </p></details>
    

### 3. What is the value of "result"?

```
const value = -2009;
const result = Math.abs(value);

```

* 1
* -2009
* 2009

<details><summary>ANSWER</summary> 234
  
  <p> 
Math.abs() function returns the absolute value of a number.
  </p></details>
    

### 4. What is the value of "result"?

```
const result = true + true;
```

* 0
* NaN
* 2
* 1

<details><summary>ANSWER</summary> 2
  
  <p> 
+ operator converts booleans into numbers. true = 1, false = 0.
</p></details>
    
### 5. What is the value of "result"?

```
const str = "JavaScript";
const substr = "str.substr(1, 4);
const substring = str.substring(1, 4);
const result = substr.indexOf(substring);
```

* -1
* 4
* 1
* 0

<details><summary>ANSWER</summary> 0
  
  <p> 

substr() method returns the part of a string between the start index and a number of characters after it.
substring() returns the part of the string between the start and end index, or the end of the string.
The indexOf() method returns the index within the calling String object of the first occurance of the specificd value, staring the search at fromIndex.

</p></details>
    
### 6. What is the value of "result"?

```
const a = [1, 2, 3, 4, 5];
const result = a.push(6) - a.pop();
```

* NaN
* 6
* 0
* -1

<details><summary>ANSWER</summary> 0
  
  <p> 
  The push() method adds one or more elements to the end of an array and returns the new length of the array. The pop() method removes the last ement from an array and reurns that element.
</p></details>
    
### 7. What is the value of "result"?

```
const User = function (name) {
  this.name = name;
};

const user1 = new User("Brendan")
const user2 = new User("Brendan")
const result = user1 === user2;
```

* false
* true

<details><summary>ANSWER</summary> false
  
  <p> 
  The new operator creates a new insance of a user-defined object or of one of the built in functions 
  </p></details>
    
### 8. What is the value of "result"?

```
const check = (value) => value === 2;
const result = [1, 2, 3].every(check);
```

* true
* false

<details><summary>ANSWER</summary> false
  
  <p> 
 the every() method tests weather all the elements in teh array pass the test implemnted by the provided function.
  </p></details>
    
