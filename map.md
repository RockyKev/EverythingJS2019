

//mapping array into a list item. 
const numbers = [1, -1, 2, 3];

const items = numbers.map(n => '<li>' + n + '</li>');

console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

Version 1: mapping array into a object
const numbers = [1, -1, 2, 3];

const items = numbers.map(n => {
  return { value: n };
});

console.log(items);

//Version 2: mapping array into a object
const numbers = [1, -1, 2, 3];

const items = numbers.map(n => ({ value: n }) );

console.log(items);
