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

## v-if / v-show

conditionals that will display information depending on meeting the requirement. This can be on anything - buttons, forms, divs, components.

IF Statement
```
new Vue({
  el: '#app', 
  data() {
   return {
     tacos: ''
   }
  }
})

--------------------- HTML ----------------
<div id="app">
  <h3> What is your favorite kind of taco?</h3>
  <textarea v-model="tacos"> </textarea>
  
  <br> 
  <button type="submit" v-if="tacos">Let us know!</button>
</div>  

```

IF/ELSE

```
new Vue({
  el: '#app', 
  data() {
    return {
      tacos: ''
    }
  }
})

--------------------- HTML ----------------
<div id="app>
  <h3> Do you like tacos? </h3> 
  <input type="radio" id="yes" value="yes" v-model="tacos"> 
  <label for="yes"> yes</label>
  <br> 
  <input type="radio" id="no" value="no" v-model="tacos"> 
  <label for="no"> no</label> 

  <br> 
  <div v-if="tacos"> 
    <p v-if="tacos === 'yes'" class="thumbs">👍</p>
    <p v-else> you're a monster </p>
  </div>
</div>

```

## v-bind or ':'

One of the most useful directives. It canbe used for many things - class and style binding, creating dynamic props, etc. 

```
new Vue({
  el: '#app', 
  data() {
    return {
      tacos: '', 
      activeClass: 'active'
    }
  }
})

--------------------- HTML ----------------
<div id="app">
 <h3> What is your favorite kind of taco? </h3> 
 <textarea v-model="tacos"> </textarea>
 
 <br>
 <button :class="[tacos ? activeClass : '']"> Let us know </button>
</div> 

```

## v-once and v-pre
Not quite as as useful. 

v-once will not update once it's been rendered. 
v-pre will print out the iner text exactly how it is, with code. 

```
new Vue({
  el: '#app', 
  data() {
    return {
      tacos: 'I like al Pastor tacos', 
    }
  }
})
--------------------- HTML ----------------
<div id="app">
 <h3> What is your favorite kind of taco? </h3> 
 <p> <input v-model="tacos" /> </p>
 
 <p v-once="tacos"> {{ tacos }} </p>
 
 <span v-pre> this is good if I need to show you the mustache view of {{ tacos }} </span>
 <pre> {{ $data }} </pre> 
</div> 
```

## v-on or @

Extremely useful (so there's a shortcut!)
v-on is great for binding to events like click or mouseenter. You're able to pass in a parameter for the event like (e). 

Also, ternaries directly. 


```
new Vue({
  el: '#app', 
  data() {
    return {
      counter: 0
    }
  }
})
--------------------- HTML ----------------

<div id="app"> 
  <div class="item"> 
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg" width="235" height="300"/>
   
    <div class="quantity"> 
      <button class="inc" @click="counter > 0 ? counter -=1 : 0"> - </button>
      <span class="quant-text">Quantity: {{ counter }} </span> 
      <button class="inc" @click="counter += 1"> + </button>
    </div>
    
    <button class="submit" 2click=""> Submit</button> 
  </div> 
</div> 
```

Multiple bindings like: 
<div v-on=" 
  click : onClick,
  keyup : onKeyup,
  keydown : onKeydown
  "> 
</div> 

@mousemove.stop is comparable to e.stopPropagation()
@mousemove.prevent this is like e.preventDefault()
@submit.prevent this will no longer reload the page on submission
@click.once not to be confused with v-once, this click event will be triggered once. 
@click.native so that you can listen to native events in the DOM.

## v-html

Great for strings that have html elements that need to be rendered!


```
new Vue({
  el: '#app', 
  data() {
    return {
      tacos: `I like <a href="#">Al Pastor</a> tacos`
    }
  }
})
--------------------- HTML ----------------

<div id="app"> 
  <h3> What is your favorite kind of taco? </h3> 
  <p v-html="tacos"> </p>
</div> 
```

## v-text
It's similar to using the mustache templates. 

These are the same.
  <p v-text="tacos"> </p>
  <p> {{ tacos }} </p>

NOTE: If you want to dynamically update, it's recommended to use the mustache templates instead.

```
new Vue({
  el: '#app', 
  data() {
    return {
      tacos: `I like Al Pastor tacos`
    }
  }
})
--------------------- HTML ----------------

<div id="app"> 
  <h3> What is your favorite kind of taco? </h3> 
  <p v-text="tacos"> </p>
  <p> {{ tacos }} </p>
  <p> <input v-model="tacos" /> </p> 
</div> 
```

!(cheetsheet)[https://s3.amazonaws.com/media-p.slid.es/uploads/75854/images/3964241/Screen_Shot_2017-07-04_at_8.01.02_PM.png]
!(cheetsheet2)[https://s3.amazonaws.com/media-p.slid.es/uploads/75854/images/3964242/Screen_Shot_2017-07-04_at_8.01.18_PM.png]

https://css-tricks.com/guides/vue/

