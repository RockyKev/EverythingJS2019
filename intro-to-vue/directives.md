# Vue Directives

* v-text
* v-html
* v-show
* v-if
* v-else
* v-else-if
* v-for
* v-on
* v-bind
* v-model
* v-pre
* v-cloak
* v-once

## v-for
```
<div id="app">
  <ul> 
    <li v-for "num in 5" :key="num">
    {{ num }}
    </li>
  </ul>
</div>
```

## v-model
Creates a relationship between the data in the instance/component and a form input, so you can dynamically update values. 

TYPING
```
new Vue ({
  el: '#app', 
  data() {
    return {
      message: 'This is a good place to type things.'
    }
  }
});
--------------------- HTML ----------------
<div id="app"> 
  <h3>Type here: </h3>
  <textarea v-model="message" class="message" rows="5" maxlength="72"/>
  <br>
  <p class="booktext"> {{ message }} </p>
</div>
```

CHECKBOX METHOD 1: 
```
new Vue({
  el: '#app', 
  data: {
    checkedNames: []
  }
})

--------------------- HTML ----------------
<div id="app"> 
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john"> John</label>  

  <input type="checkbox" id="paul" value="Paul" v-model="checkedNames">
  <label for="paul"> Paul</label>  

  <input type="checkbox" id="geprge" value="George" v-model="checkedNames">
  <label for="george"> George</label>  

  <input type="checkbox" id="ringo" value="Ringo" v-model="checkedNames">
  <label for="ringo"> Ringo</label>  

  <br>
  <span> Checked Names: {{ checkedNames }}
  </span>
</div>



```
CHECKBOX METHOD 2: 
```
new Vue({
  el: '#app', 
  data: {
    checkedNames: [], 
    options: [
     { value: 'John'}, 
     { value: 'Paul'}, 
     { value: 'George'}, 
     { value: 'Ringo'}, 
    ]
  }
})
--------------------- HTML ----------------
<div id="app">
  <span v-for="option in options">
    <input :id="option.value" :value="option.value" v-model="checkedNames" type="checkbox">
    <label for="option.value">{{option.value}} </label>
  </span>

  <br>
  <span>Checked names: {{ checkedNames }} </span>
</div>
```

## More with v-model
1. v-model.trim will strip any leading or trailig whitespace from the bound string.
2. v-model.number changes strings to number inputs
3. v-model.lazy won't populate the content automatically. It will wait to bind until an event happens. (It listens to change events instead of input.)








