Advanced

## Test 1
### 1. What is the value of "result"?

```
const toString = Object.prototype.toString;
const result = toString.call(null)

```

* [object Object]
* null
* Null
* [object Null]
* [Object]


<details><summary>ANSWER</summary>

[object Null]

  <p>
The toString() method returns a string representing the object. toString() can be used with every object and allows you to get its class. To use the Object.prototype.toString() with every object, you need to call Function.prototype.call() or Function.prototype.apply() on it, passing the object you want to inspect as the first parameter called thisArg.

</p></details>


### 2. What is the value of "result"?

```
const func = function() {
  return arguments.join("");
}
const result = func(2009, 262);

```

* 2009262
* 2271
* throw a TypeError
* NaN

<details><summary>ANSWER</summary>
throw a TypeError
  <p>

The arguments object is an Array-like object. The objects passed were not Arrays, and did not have a join() method.

</p></details>


### 3. What is the value of "result"?

```
let result = "string";
(function () {
  result = typeof arguments;
   }) ();


```

* string
* null
* array
* object
* undefined

<details><summary>ANSWER</summary>
object
  <p>
The arguments object is an Array-like object corresponding to the arguments passed to a function. The typeof arguments returns 'object'.

</p></details>


### 4. What is the value of "result"?

```
const target = {
  name: "ECMAScript",
};

const proxy = new Proxy(target, {});
proxy.name = "JavaScript";

const result = target.name;

```

* JavaScript
* ECMAScript
* undefined

<details><summary>ANSWER</summary>

JavaScript
  <p>

Proxy is an object in JavaScript which wraps an object or a function and monitors it via something called target, irrespective of the wrapped object or function existence. Proxy are similar to meta programming in other languages.

</p></details>


### 5. What is the value of "result"?

```
const User = function() {
  const result = new.target === User;
};

const man = new User();

```

* throw a SyntaxError
* false
* true

<details><summary>ANSWER</summary>
true
  <p>

The new.target property lets you detect whether a function or constructor was called using the new operator. In constructors and functions instantiated with the new operator, new.target returns a reference to the constructor or function. In normal function calls, new.target is undefined.

</p></details>


### 6. What is the value of "result"?

```
const constructor = function () {};

const result = constructor.prototype.constructor === constructor;

```

* throw a SyntaxError
* true
* false

<details><summary>ANSWER</summary>
true
  <p>

Function.prototype.constructor function created the instance object. The value of this property is a reference to the function itself.
</p></details>



### 7. What is the value of "result"?

```
const plus = +0;
const minus = -0;
const result = Object.is(plus, minus);

```

* true
* false
* throw a SYntaxError

<details><summary>ANSWER</summary>
false
  <p>

Object.is and strict comparison operator behave exactly the same exact for NaN and +0/-0. The === operator treats the numbers value -0 and +0 as equal, but "Object.is" does not.

</p></details>


### 8. What is the value of "result"?

```
const obj = {} ;
const result = "toString" in obj;

```

* true
* false
* undefined
* null

<details><summary>ANSWER</summary>
true
  <p>

The in operator returns true if the specified property is in the specified object or it's prototype chain. "toString" is a method of the Object.prototype.

</p></details>



## Test 2
### 1. What is the value of "result"?

```
const params = [1, 2, 3, 4, 5];
const result = Math.max.apply (10, params);

```

* 10
* 6
* undefined
* 5
* throw a SyntaxError

<details><summary>ANSWER</summary>
5
  <p>
The Math.max() function returns the largest of zero or more numbers. The apply() method calls a function with a given 'this' value, and arguments provide as an array. In this case, the "10" is ignored by Math.max()".

</p></details>


### 3. What is the value of "result"?

```
function func (a, b) {
  "use strict";
  a = 262;
  b = 95;
  const result = arguments[1];
};

func(95, 262);

```

* 95
* 262
* undefined
* 1
* throw a SyntaxError

<details><summary>ANSWER</summary>

262
  <p>
In strict mode, the arguments object does not reflect changes to the named parameters. In non-strict mode, the arguements DO change.

</p></details>


### 3. What is the value of "result"?

```
let value = 10;
const promise = new Promise( (resolve) => {
  value = 20;
  resolve(30);
});

const result = value;

```

* 20
* 30
* undefined
* 10

<details><summary>ANSWER</summary>
20
  <p>

The Promise object represents the eventural completion (or failure) of a asynchronous operation, and its resulting value. The executor function is executed immmediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object).

</p></details>


### 4. What is the value of "result"?

```
const object = new Object();
const proto = Object.getPrototypeOf(object);

const result = proto.instanceof Object;
```

* true
* false
*

<details><summary>ANSWER</summary>
false
  <p>
The instanceof operator tests whether the prototype proprety of a constructor appears anywhere in the prototype chain of an object. Prototype of "proto" equals "null" and "null" is not instance of Object.

</p></details>


### 5. What is the value of "result"?

```
const array = [1, 2, 3, 4, 5];
const result = array.fill(1, 2).join("");

```

* 12121
* 1234512
* 12111
* 11345


<details><summary>ANSWER</summary>
12111
  <p>
The fill() method takes up to three arguments. fill(value, start, end).
The start/end arguments are optional.

</p></details>

### 6. What is the value of "result"?

```
//non-strict mode

const obj = {
 name: "JavaScript"
};

Object.seal(obj);
obj.name = "ECMAScript";
const result = obj.name;

```

* ECMAScript
* undefined
* null
* JavaScript

<details><summary>ANSWER</summary>
ECMAScript
  <p>
The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.


</p></details>

### 7. What is the value of "result"?

```
const push = Array.prototype.push;
const first = [2009, 95];
const second = [95, 2009];

const result = push.apply(first, second);
```

* 4
* [95, 2009, 2009, 95]
* [2009, 95, 95, 2009]
* false

<details><summary>ANSWER</summary>
4
  <p>
The push() method adds one or more elements to the end of an array and returns the new length of the array.
The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object). It is the same as const result = first.push(... second).

</p></details>

### 8. What is the value of "result"?

```
const result = null + [0, [1] ] [1][0];
```

* null
* 1
* NaN
* 0
* undefined


<details><summary>ANSWER</summary>
1


  <p>

[0, [1] ] [1][0] extracts 1 from the inner array of [0, [1]].

1 + null becomes 0 in JavaScript. + converts null to 0.



</p></details>























