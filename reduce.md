
//NON Reduced method

```
const numbers = [1, -1, 2, 3];

let sum = 0;

for (let n of numbers) {
  sum += n;
}

console.log(sum);
```

//REDUCED method

```
const numbers = [1, -1, 2, 3];

//a = 0, c = 1 => a = 1
//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
```

```
const animals = [
  {
    "name": "cat",
    "size": "small",
    "weight": 5
  }, 
  {
    "name": "dog", 
    "size": "small",
    "weight": 10
  }, 
  {
    "name": "lion", 
    "size": "medium", 
    "weight": 150
  }, 
  {
    "name": "elephant",
    "size": "big",
    "weight": 5000
  }
]

function totalWeight_noReduce() {
  let total_weight = 0;

  for (let i = 0; i < animals.length; i++) {
    total_weight += animals[i].weight
  };

  return total_weight;
}


function totalWeight_Reduce() {
  return animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight;
  }, 0)
}



```
