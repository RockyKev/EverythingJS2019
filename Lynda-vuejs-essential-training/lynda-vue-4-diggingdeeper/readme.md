

filters help display values a bit cleaner.

For example: 

Some prices are: 
29.99
99
45


#How to use a filter. 

1) define the filter in the code.

```
var app = new Vue({
 el: '#app',
 data: {
  inputWidth: 60,
  sliderStatus: false,
  labelArr: ['font-weight-bold', 'mr-2'],
  maximum: 99,
  products: null,
  cart: []
 },
 filters: {
   currency: function(value) {
    return '$' + Number.parseFloat(value).toFixed(2);
  }
 })

```

2) Use a pipe | to call through it. 

```
{{ item.price | currency }}
```

#Toggling elements with a key
