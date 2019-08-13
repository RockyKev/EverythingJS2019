# Compare stuff to Vanilla JS

## A List of Items

VANILLA JS

```
const items = [
  'thingie', 
  'another thing', 
  'other stuff', 
  'more stuff'
]; 

function listOfStuff() {
  let full_list = '';
 
  for (let i = 0; i < items.length; i++) {
    full_list = full_list + `<li> ${items[i]} </li>` 
  }
 
  const contain = document.querySelector('#container'); 
  contain.innerHTML = `<ul> ${full_list} </ul>`;

listOfStuff(); 

-----------------------HTML------------------
<div id="container"> </div>
```
 
VUE
```
new Vue({
  el: '#app', 
  data: {
    items: [
      'thingie', 
      'another thing', 
      'other stuff', 
      'more stuff'
    ]
   }
 }); 
 
-----------------------HTML------------------
<div id="app"> 
  <ul> 
    <li v-for="item in items">
     {{ item }}
     </li> 
  </ul>
</div>
 
 ```
 
 
 
