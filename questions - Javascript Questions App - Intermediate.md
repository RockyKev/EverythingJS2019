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
