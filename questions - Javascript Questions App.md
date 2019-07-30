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
