## Test 1
### 1. What is the value of "result"?

```
let result = 2009;
const funct = (x = 262) => {
  result = x;
}
  func(null);
```

* 2009
* 262
* null 

<details><summary>ANSWER</summary>
null
  <p> 
Default function paramters allow paramters to be initialized with default value. 
So for the "const funct", if no paramter was submitted, it would be 262. 

But null was passed as variable x, and result = x.
</p></details>


### 2. What is the value of "result"?

```
const result = 0 || 1 && 2 || 3;
```

* 3
* true
* 1
* 2
* 0

<details><summary>ANSWER</summary>

<p> 

Logical AND '&&'. 
If the left side is true, it returns the right side.
If the left side is false, it returns the left side.

Logical OR '||'. 
If the left side is true, it returns the left side. 
Else, it returns the right side.

So (0 || 1) is 1. 1 (one) also equates to true.
(2 || 3) is 2. Since this equation is false, it'll return 2. 

</p></details>

### 3. What is the value of "result"?

```
const plus = +0;
const minus = -0;
const result = plus === minus;
```

* false
* throw a SyntaxError
* true

<details><summary>ANSWER</summary>
true
<p> 
Signed zero is zero with an associate sign. 
In computing, the number 0 can be represented as +0 or -0. 

</p></details>


### 4. What is the value of "result"?

```
const result = "1" == 1;
```

* true
* false

<details><summary>ANSWER</summary>
true
<p> 

The quality '==' operator converts the operands if they are not the same time.

So "1" becomes the value 1. To be safe, you should use '==='. 

</p></details>


### 5. What is the value of "result"?

```
const value = new Set([1, 1, 2, 3, 2, 3]);
const result = [...value];
```

* [1, 1, 2, 3, 2, 3]
* 112323
* [ 1 ]
* [1,2,3]

<details><summary>ANSWER</summary>
[1, 2, 3]
<p> 
[...value] means it's unpacking the value of the Set array into a result. 
The Set object lets you store unique values. The value may only occur once. 

</p></details>

### 6. What is the value of "result"?

```
const getA = () => 1;
const getB = () => 2;
const getC = () => 3;

const result = (getA(), getB(), getC());
```

* undefined
* 1
* 3
* 6

<details><summary>ANSWER</summary>
<p> 

The comma operator evaluates each of it's operands (from left to right) and returns the value of the last operand.

</p></details>

### 6. What is the value of "result"?

```
const getA = () => 1;
const getB = () => 2;
const getC = () => 3;

const result = (getA(), getB(), getC());
```

* undefined
* 1
* 3
* 6

<details><summary>ANSWER</summary>
<p> 

The comma operator evaluates each of it's operands (from left to right) and returns the value of the last operand.

</p></details>



### 7. What is the value of "result"?

```
const array = [10, 15, 20, 25, 30]
const result = array.find(v => v > 15);
```

* 2
* 3
* 20
* 15 

<details><summary>ANSWER</summary>
20
<p> 
The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned. 

</p></details>



### 8. What is the value of "result"?

```
class User {
 getName() {}
}

const result = typeof User;
```

* function
* class
* string
* object

<details><summary>ANSWER</summary>
function
<p> 

The class declaration creates a new class with a given name using prototype-based inheritance. 
It is the same as if you use function declaration: 
```
function User() {};
User.prototype.getName = function() {}
```


typeof returns 'function' string for function. 
</p></details>

## Test 2
### 1. What is the value of "result"?

```
const map = v => v * v;
const array = Array.from ([1, 2, 3]);
const result = array.join("");

```

* 149
* 1,2,3
* 6
* 123
* 14


<details><summary>ANSWER</summary>
149
<p> 
  
Array.from() creaes a shallow-copied Array instance. 
map calls a function on every element in the array.
,join("") merges into each other.
</p></details>

### 2. What is the value of "result"?

```
const array = [1, 2, 3];
const result = 3 in array;
```

* false
* true

<details><summary>ANSWER</summary>
false
<p> 

The operator is askig if the array has a index item '3'. It does not.
</p></details>

### 3. What is the value of "result"?

```
const func = function (x, y = 4) {
 return x + y
}

const result = func(2);
```

* NaN
* undefined
* 8 
* 6
* 2

<details><summary>ANSWER</summary>
6
<p> 
func takes two parameters. x, and y (which if it doesn't exist, defaults to 2). 
  
  So calling func(4) is the same as calling func(4, 2).
</p></details>

### 4. What is the value of "result"?

```
const numbers = [2009, 95, 262];
const [first, ...rest ] = numbers;
const result = rest[1];
```

* 
<details><summary>ANSWER</summary>
262
<p> 
The destructuring assignmnet syntax is a JS expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern.

</p></details>


### 5. What is the value of "result"?

```
const o = {
 name: "ECMAScript",
 version: 2016
};

const result = Object.values(o).join("");

```

* null
* ECMAScript2016
* undefined
* nameVersion
<details><summary>ANSWER</summary>
ECMAScript2016

<p> 
Object.values() returns an array whose elements are the enumerable property values found on the object. 
  That ordering of the properties is the same as that given by looping over the property values of the object nanually. 
</p></details>


### 6. What is the value of "result"?

```
const result = Number.parseInt("1995 year");
```

* null
* 1995
* undefined
* NaN

<details><summary>ANSWER</summary>
1995
<p> 

the Number.parseInt() parses a string argument and returns an integer. 
If the first character cannot be converted to a number, NaN is returned.
</p></details>


### 7. What is the value of "result"?

```
let name = 1;
({name} = {name: 3});

const result = name;
```

* 1
* throws a SyntaxError
* 3
* NaN
* undefined

<details><summary>ANSWER</summary>
3
<p> 
The destructuring assignment syntax is a javaScript expression that makes it possible to unpack values from arrays, or properteis from jobjects, into distinct variables. 
  

</p></details>


### 8. What is the value of "result"?

```
const array = [1, 2, 3];
let result 1;

for (const value of array) {
  result *= value;
}
```

* throw a TypeError
* 36
* 0
* 6

<details><summary>ANSWER</summary>
6
<p> 

The for... of statement creates a loop iterating over iterable objects (including the built-in Stirng, Array, TypedArray, Map and Set, and user-defined iterables, invokin a custom interation hook with statements to be executed for the value of each distinct property of the object.
</p></details>


## Test 3

### Question 1: 

What is the value of "result"?

```
const result = Object.is(NaN, NaN)
```

* false
* Throw a SyntaxError
* true
* undefined

<details> <summary> ANSWERS </summary> true

<p>
Object.is and strict comparison use the === operator to compare things. 
EXCEPT when using +0/-0. 

The === operator treats the number values -0 and +0 as eauals. 
It treats NaN as not equal to NaN. 


</p></details> 



### Question 2: 

What is the value of "result"?

```
let result = 2009;
let value = 262;
const obj = {
  value: 95
  };
with (obj) {
  result = value; 
}

```

* 262
* throw a ReferenceError
* 2009
* 95

<details> <summary> ANSWERS </summary> 
95

<p>

The with statement extends the scope chain for a statement. JavaScript looks up an unqualified name by sarchin a scope chain associated with the execution context of the script. 
The 'with' statement adds the given object to the head of this scope...

</p></details> 

### Question 3: 

What is the value of "result"?

```
var value = 2009;
delete value; 
const result = value;
 
```

* null
* undefined
* 2009

<details> <summary> ANSWERS </summary> 
2009

<p>
The delete operator removes a property from an object. 
Any property declared with var cannot be delted from the global scope or from a function's scope. 

</p></details> 


### Question 4: 

What is the value of "result"?

```
const result = null && undefined; 
 
```

* undefined
* true
* null
* false

<details> <summary> ANSWERS </summary> 
null
<p>

&& operator returns left operand if it can be converted to false, otherwise, it returns the right operand.
The following are always falsy: false, 0 (zero), empty strings like '' or "", null, undefined, NaN. 

</p></details> 


### Question 5: 

What is the value of "result"?

```
 const s = new Set([1, 1, 2, 3, 4, 4, 5, 5]);
 const result = s.size;
 
```

* 7
* undefined
* 8
* 5

<details> <summary> ANSWERS </summary> 
5
<p>
The Set Object lets you store unique values. The value can only occur once.
</p></details> 


### Question 6: 

What is the value of "result"?

```
 const result = Number.MIN_VALUE > 0;
 
```

* true
* false

<details> <summary> ANSWERS </summary> 
true

<p>

The Number.MIN-VALUE property represents the smallest positive numeric value presentable in JavaScript. Number.MIN_VALUE has a value of approximately 3e-434. Values smaller than MIN_VALUE are converteed to 0. 
</p></details> 


### Question 7: 

What is the value of "result"?

```
 const result = "good" > "bad"
 
```

* throw a SyntaxError
* true
* false

<details> <summary> ANSWERS </summary> 

<p>
Strings are compared lexicographically in JS. 'b' proceeds 'g' so the comparison "goood" vs "bad" is correct. 
</p></details> 


### Question 8: 

What is the value of "result"?

```
 const array = [1, 2, 3];
 const map = (v,i) = v * i
 const result = array.map(map)
 
```

* [0, 2, 6]
* [NaN, NaN, NaN]
* [1, 4, 9]
* [1, 2, 3]

<details> <summary> ANSWERS </summary> 
[0, 2, 6]
<p>

The map() method creates a new array with the results of calling a provided function on every element in the calling array. 

0 * 1 = 0
1 * 2 = 2
2 * 3 = 6

</p></details> 

## Test 4
### Question 1: 

What is the value of "result"?

```
 const result = Number("") + 1;

 
```

* 1
* 0 
* NaN
* undefined

<details> <summary> ANSWERS </summary> 
1
<p>
the Number() object is a wrapper object allowing you to work with numerical values. 
If arguements cannot be converted into a number, it converts to NaN. 
In this case, it converts to 0. 
</p> </details> 

### Question 2: 

What is the value of "result"?

```
const numbers = [2009];
const [first, second = 95] = numbers;
result = second;
 
```

* throw a SyntaxError
* null
* undefined
* 95

<details> <summary> ANSWERS </summary> 
95
<p>
The destructuring assignment santax is a JS expression that makes it posible to unpack values from arrays, or properties from objects, into distinct variables. A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
</p></details> 

### Question 3: 

What is the value of "result"?

```
 const value = "2009";
 const result = isFinite(value);
 
```

* false
* true

<details> <summary> ANSWERS </summary> 
true
<p>

The global isFinite() function determines whether the passed value is af inite number. 
False == NaN, positive infinity, negative infinity, this 
Otherwise, return true
</p></details> 


### Question 4: 

What is the value of "result"?

```
const func = new Function ("a", "b", "return a + b");

const result = func (1, 2)
 
```

* undefined
* throw a SynaxError
* 3
* null

<details> <summary> ANSWERS </summary>  3

<p>
Calling the constructor directly `new Function` can create function synamically, but suffers from security and similar performance issues like eval. 
</p></details> 


### Question 5: 

What is the value of "result"?

```
const func = (obj) => {
 obj = null; 
};

const obj = {
 name: "Brendan"
};

func(obj);


const result = obj.name;
```

* null
* undefined
* Brendan
* throw a ReferenceError

<details> <summary> ANSWERS </summary> 
Brandan
<p>

"obj" inside the "func" refers to a local variable not to a global variable with the same name. 
</p></details> 

### Question 6: 

What is the value of "result"?

```
 const firstArray = [1, 2, 3];
 const secondArray = [1, 2, 3];

const result = firstArray == secondArray
 
```

* true
* false

<details> <summary> ANSWERS </summary> 
false
<p>
When comparing arrays - it is checking to see if it's made from the same source within memory, NOT comparing values. 
</p></details> 

### Question 7: 

What is the value of "result"?

```
const array = [1, 3, 5, 3, 10];
const result = array.lastIndexOf(3); 
 
```

* 1
* 4
* -1
* 3
* 2

<details> <summary> ANSWERS </summary> 
3
<p>

The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. 

[1, 3, 5, 3, 10] 

So counting backwards: 
10 = index 0
3 = index 1
5 = index 2
3 = index 3

</p></details> 

### Question 8: 

What is the value of "result"?

```
function func() {
 return;
}

const result = func();
```

* undefined
* null
* throw a ReferenceError

<details> <summary> ANSWERS </summary> 
undefined

<p>

the "return" expression statement ends a function and specifies a value to be returned. 
Since the value was omitted, 'undefined' was returned instead.
</p></details> 








