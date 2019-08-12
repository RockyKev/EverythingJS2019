## pi

```
let PI = 3.14;

const calculateArea = (radius) => radius * radius * PI;

calculateArea(10); // returns 314.0
```

IMPURE
Impure. Because it takes PI, which is a global variable. Imagine if PI suddenly changes. 


```

let PI = 3.14;

const calculateArea = (radius, pi) => radius * radius * pi;

calculateArea(10, PI); // returns 314.0

```

Pure. It takes two variables, and does something with it. Even if PI changes, it can be fixed. 
source: https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa
