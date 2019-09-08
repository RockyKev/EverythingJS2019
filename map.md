

/* TWO DIFFERENT WAYS */
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

function animalNames_noMap() {
  let animal_names = [];

  for (let i = 0; i < animals.length; i++) {
    animal_names.push(animals[i].name);
  }
  return animal_names;
}

function animalNames_Map() {
  return animals.map((animal, index, animals) => {
    return animal.name
  })
}
```

//mapping array into a list item. 
```
const numbers = [1, -1, 2, 3];

const items = numbers.map(n => '<li>' + n + '</li>');

console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
```

```
Version 1: mapping array into a object
const numbers = [1, -1, 2, 3];

const items = numbers.map(n => {
  return { value: n };
});

console.log(items);
```

```
//Version 2: mapping array into a object
const numbers = [1, -1, 2, 3];

const items = numbers.map(n => ({ value: n }) );

console.log(items);
```


