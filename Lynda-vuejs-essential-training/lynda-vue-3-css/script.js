
//var app = new Vue({
//   el: '#app', 
//   data: data
// });

//this pulls a json into vue using fetch.
// var app = new Vue({
//   el: '#app', 
//   data: {
//     maximum: 99, 
//     products: null
//   }, 
//   mounted: function()  {
//     fetch('https://hplussport.com/api/products/order/price')
//     .then(response => response.json())
//     .then(data => {
//       this.products = data;
//     })
//   }
// });

// adding events/methods
var app = new Vue({
  el: '#app', 
  data: {
    sliderStatus: true, 
    formARRAY: ['font-weight-bold', 'mr-2'],
    formOBJECT: {'font-weight': '900', 'font-size':'20px', 'padding-right': '20px'},
    maximum: 99, 
    products: null,
    cart: []
  }, 
  methods: {
      addItem: function(product) {
        this.cart.push(product);
      }, 
      beforeEnter: function(el) {
        el.className='d-none'
      },
      enter: function(el) {
        var delay=el.dataset.index * 100;
        /*We need a delay timer. 
        So this allows us to create a offset of time, based on their index. */

        setTimeout(function() {
          el.className="row d-flex mb-3 align-items-center animated fadeInRight" 
        }, delay);
      },
      leave: function(el) {
        var delay=el.dataset.index * 100;
        /*We need a delay timer. 
        So this allows us to create a offset of time, based on their index. */

        setTimeout(function() {
          el.className="row d-flex mb-3 align-items-center animated fadeOutRight" 
        }, delay);
      }
  },
  computed: {
      sliderState: function() {
        return this.sliderStatus ? "d-flex": "d-none";
      }
  },
  mounted: function()  {
    fetch('https://hplussport.com/api/products/order/price')
    .then(response => response.json())
    .then(data => {
      this.products = data;
    })
  }
});
