//note: this does not work in node, as fetch needs a npm package.

const api_url = "https://dog.ceo/api/breeds/image/random"

fetch(api_url)
    .then(response => response.json())
    .then(response => console.log(response));

(async () => {
  const data = await fetch(api_url)
  const jsonData = await data.json();
  console.log(jsonData);
})();

/********I think this is psudocode, but this is how it looks like *****/

// const myPromise = new Promise(response => response("hello world"));

// const makeAsyncRequest = async () => {
//   await myPromise();
//   await myPromise();
//   await myPromise();
// }

// const makePromiseRequest = () => {
//   return myPromise()
//     .then( ()=> myPromise() )
//     .then( ()=> myPromise() )
//     .then( ()=> myPromise() )  
// }