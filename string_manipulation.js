const url = "https://www.website.com/blog/article/id/2";

console.log(url.startsWith("https")); //=> true
console.log(url.startsWith("http://")); //=> false

console.log(url.endsWith("1")); //=> false

console.log(url.startsWith("ttps", 1)); //=> true
console.log(url.startsWith("tps", 2)); //=> true
