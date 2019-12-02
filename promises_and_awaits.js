// first function here
// promise is resolving
// promise is resolving
// second function here

/* Note - fetch is a promise. Check fetchfor more info. */

function myPromiseFunction() {
    return new Promise(resolve => resolve("promise is resolving"))
};

function firstFunction() {
    myPromiseFunction().then(resolve => console.log(resolve));
    console.log("first function here");
}

async function secondFunction() {
    console.log(await myPromiseFunction());
    console.log("second function here");
}

firstFunction();
secondFunction();

