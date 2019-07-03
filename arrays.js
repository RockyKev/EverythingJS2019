All aboot Arrays


//Array.prototype.includes(expression)

var people = ["john", "bob"]
people.includes("john")

//Array.prototype.find(f)

//Array.prototype.findIndex(f)
//find & findIndex returns the first value or index that satisfies the testing function f

var otherPeople = [
    {name: 'Alex', age: 36}, 
    {name: 'John', age: 20}, 
    {name: 'Tait', age: 1}   
];

otherPeople.find(function (e, i, src) {
    return element.age > = 18;
})

//return Alex

otherPeople.findIndex(function (e, i, src) {
 return element.age > 18 &&
        element.age < 30
 }); 
 
 //returns 1
 
 [1, 1, 1].fill(5)  //[5, 5, 5]
 [1, 1, 1, 1, 1].fill(5, 1, 3) // [1, 5, 5, 1, 1]
 
 //Array keys, values, and entries
 
 var arr = ["a", "b", "c"]
 
 var arrEntries = arr.entries()
 
     arrEntries.next()
    //{value: [0, "a"], done:false}

     arrEntries.next()
    //{value: [1, "b"], done:false}

     arrEntries.next()
    //{value: [2, "c"], done:false}

     arrEntries.next()
    //{value: undefined, done:true}
 
 //Array.copyWithin 
 //copies the shalow part of an array
 
 var alphabet = ["a", "b", "c", "d", "e"]
 
 alphabet.copyWithin(2, 0, 2)
 
    //start at index 2
    //copy from zero for two indexes
 
     //RESULT: ["a", "b", "a", "b", "e"]
 
 alphabet.copyWithin(-2)
    //RESULT: ["a", "b", "c", "a", "b"]
 
 
 let ints = ['1', '2', '3', '4', '5', '6', '7']
 
 //goal == ['1', '7', '3', '4', '5', '6', '7']
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
