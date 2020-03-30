https://codepen.io/rockykev/pen/KKpbWxM

```
<h1>STUFF </h1>

<ul id="list">
</ul>

```

```
// if (response.ok) {
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }

// let url = "https://hplussport.com/api/products/order/price";
// let response = await fetch(url);
// let commits = await response.json();

// let products = fetch('https://hplussport.com/api/products/order/price')
//    .then(res => res.json())
//    .then(data => {
//         console.log(data);
//         console.log("after");

//       });

const list = document.querySelector("#list");

async function testFunction(substring) {
  let url =
    "https://raw.githubusercontent.com/RockyKev/retro-donuts-nuxt/master/menu.json";
  let response = await fetch(url);
  let commits = await response.json(); // read response body and parse as JSON

  for (const food in commits) {
    if (food.includes(substring)) {
      //create a new list item
      let node = document.createElement("li");
      let nodeText = document.createTextNode(`${food}: ${commits[food]}`);

      node.appendChild(nodeText);
      list.appendChild(node);
    }
  }

  console.log("commits", commits);
}

//call function
testFunction("zen");

```
