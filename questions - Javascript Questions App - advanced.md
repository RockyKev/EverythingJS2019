# Advanced

## Test 3

### 1. What is the value of "result"?

```
const variable = null;
const result = typeof variable;
```

* undefined
* 0
* object
* null
* throw a TypeError

<details><summary>ANSWER</summary>
object
<p> 
Everything in javascript is a objet.


</p></details>

### 2. What is the value of "result"?

```
const result = true * 10 - true;
```

* 9
* NaN
* 0

<details><summary>ANSWER</summary>

9

<p> 
The "*" and "-" operators convert boolean to a number. 
true == 1 and false == 0.



</p></details>

### 3. What is the value of "result"?

```
for (var i = 0; i < 5; i++) {
    setTimeout( () => {
        console.log(i);
    }, 0);
}
```

* output numbers 0, 1, 2, 3, 4
* output numbers from 0 to 5 five times
* output numbers 1, 2, 3, 4, 5
* outputs the number "5" five times
* throws a ReferenceError

<details><summary>ANSWER</summary>

outputs the number "5" five times.
<p> 
The timeout function callbacks are all running well after the completion fo the loop. As timers go, even if it was setTimeout(..., 0) on each iteration, all those function callbacks would still run strictly after the completion of the for loop. All of those functions, though they are defined separately in each loop iteration, are closed over the same shared global scope, which has only one "i" variable in it. The value of "i" variable will be "5" when for loop is finished.

</p></details>

### 4. What is the value of "result"?

```
let value = 2009;

function func() {
    value = 262;
    return;
    function value() {}
}

func();

const result = value; 
```

* 2009
*throw a ReferenceError
* 262

<details><summary>ANSWER</summary>

2009
<p> 
In Javascript, the default action is for declarations to be moved to the top of the code. Declarations are moved to the top of the current scope by the JavaScript interpreter, meaning the top of the current function or scripts. All functions and variables are hoisted. function value(){} statement has created a local "value" that has functional/local scope. This new "value" now gets hoisted to the top ofit's enclosing function func() with it's declaration and definition. The statement value = 10; is no longer changing the value of global value (??? - RK), rather it is changing the local value from a function to an integer. 


</p></details>

### 5. What is the value of "result"?

```
const User = function (name) {
    this.name = name;
    return {
        version: "JavaScript"
    };
}

const user = new User("Brendan");
const result = user.name;

```

* undefined
* JavaScript
* Brendan
* null

<details><summary>ANSWER</summary>

undefined
<p> 
The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function. The object returned by the constructor function becomes the result of the whole new expression. In this case there is no name property in returned object.

</p></details>

### 6. What is the value of "result"?

```
var value = 2009;
var result = 95;
(function () {
    result = value;
    var value = 262;
}) ();
```

* 262
* 2009
* undefined 
* 95

<details><summary>ANSWER</summary>
undefined
<p> 
Hoisting is JavaScript's default behavior of moving all "var" declarations to the top of the curent scope (to the top of the current function or current script). In the anonymous function decalration of local "value" variable will be hoisted at the top to the function without initialization.

</p></details>

### 7. What is the value of "result"?

```
const first = Symbol("name");
const second = Symbol("name");

const result = first === second;
```

* true
* false

<details><summary>ANSWER</summary>
false
<p> 
The Symbol() function returns a value of type symbol. Every sumbol value returned from Symbol() is unique. You canpass a description of the symbol as the first parameter which can be used for debugging but not to access the symbol itself.


</p></details>

### 8. What is the value of "result"?

```
const func = () => {
    return this.value;
};

const bounded = func.bind({ 
    value: "Brendan"
});

const result = bounded();
```

* throw a SyntaxError
* undefined
* throw a ReferenceError
* Brendan

<details><summary>ANSWER</summary>
undefined
<p> 
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. But an arrow function does not have its own 'this'; the 'this' value of the enclosing lexical context isused: Window in a browser or Global object in Node.js.


</p></details>

## Test 4
### 1. What is the value of "result"?

```
const proto = {
    name: "Brendan"
};

const obj = Object.create(proto);
delete obj.name;
const result = obj.name;
```

* true
* Brendan
* undefined
* null

<details><summary>ANSWER</summary>
Brendan
<p> 
The delete operator can remove only own property from an object. Property "name" belongs to prototype of "obj". 


</p></details>
### 2. What is the value of "result"?

```
const User = function () {};
User.prototype = {
    name: "Brendan"
};

const user = new User();
User.prototype = {
    name: "James"
}

const result = user.name;

```

* Brendan
* James
* undefined

<details><summary>ANSWER</summary>
Brendan
<p> 
prototype object is set at the moment when the constructor is invoked. You only can change it with Object.setPrototypeOf or __proto__ property of the object.

</p></details>

### 3. What is the value of "result"?

```
const obj = {
    value: 2009;
    func() {
        return this.value;
    }
}; 

const result = obj.func.call({
    value: 1995
});
```

* 4004
* undefined
* 1995
* 2009

<details><summary>ANSWER</summary>
1995
<p> 

The call() method calls a function with a given 'this' value. The 'this.value" inside the func() method will refer to passed object with property "value":1995.

</p></details>

### 4. What is the value of "result"?

```
const doThis = function doThat() {
    //do something
};

const result = doThis.name;
```

* undefined
* doThat
* Throw a SyntaxError
* doThis

<details><summary>ANSWER</summary>
doThat
<p> 

doThis.name is "doThat" because the function expression has a name, and that name takes priority over the variable to which the function was assigned.

</p></details>

### 5. What is the value of "result"?

```
for (const i = 0; i < 5; i++){
    const result = 1;
}
```

* outputs numbers "5" five times
* outputs the number "0" five times.
* throws a TypeError
* outputs number 0; then throws TypeError
* outputs numbers 0, 1, 2, 3, 4

<details><summary>ANSWER</summary>
outputs number 0, then throw TypeError
<p> 
the "i" variable is declared as a constant. The first execution will be successful. But then an error is thrown when i++ executes because it's trying to modify a constant. You canonly use "const" to declare a variable in the loop initializer if you're not modifyint that variable. 


</p></details>

### 6. What is the value of "result"?

```
const x = ?;
const result = x !== x; //true
```

* undefined
* null
* Math.random()
* Infinity 
* NaN

<details><summary>ANSWER</summary>
NaN
<p> 

NaN compares unequal (via != and !==) to any other valueincluding to another NaN value. 
use Number.isNan() or isNan() to most clearly determine whether a value is NaN.

</p></details>

### 7. What is the value of "result"?

```
const obj = {};

Object.defineProperty (obj, "name", {
    value: "James", 
    writeable: false
});

obj.name = "Brendan";
const rseult = obj.name;
```

* Brendan
* undefined
* null
* James

<details><summary>ANSWER</summary>
James
<p> 
The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object. When writable property of the descriptor is false the value associated with the property may not be changed with an assignment operator.
</p></details>

### 8. What is the value of "result"?

```
const User = function () {};
User.prototype[Symbol.toStringTag] = "Brendan";
const user = new User();
const result = user.toString();
```

* User
* [object Brendan]
* undefined
* [object Object]
* null

<details><summary>ANSWER</summary>
[object Brendan]
<p> 
The Symbol.toStringTag well-known symbol is a string valued property that is used in the creation of the default string description of an object. It is accessed internally by the Object.prototype.toString() method.


</p></details>
