// ways to add content to an array
let exampleArray = [];
// first way
exampleArray[exampleArray.length] = 0;
// with array built in function 'push'
exampleArray.push(1);
// by using push, its possible to add more than one element at a time
exampleArray.push(2,3,4,5);

// ways to add content to the beginning of an array
for(let i = exampleArray.length; i > 0; i--) {    
    exampleArray[i] = exampleArray[i - 1];
}
exampleArray[0] = -1;
// and with array built in function 'unshift'
exampleArray.unshift(-2);
// same as push, u can pass more than one element to function
exampleArray.unshift(-3,-4,-5,-6);
// now creating a method to exemplify the 'unshift' possible way of working
Array.prototype.onBegin = function(item) {
    for(let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = item;
}
exampleArray.onBegin(5);

// to remove an element at the of the a
exampleArray.pop();

// example of the code to remove an element at the begging of the array
Array.prototype.removeFirst = function() {
    // "this" the one who calls, the array
    for(let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    /*
        the only problem of this method, is that it still with the same
        length, so the last spot, will have an undefined element
    */
}
exampleArray.removeFirst();

// the builtin method to remove the first element of an array
exampleArray.shift();

// to remove elements in a specific position, theres the method splice
exampleArray.splice(5, 3); // 1 - start position (not inclusive), 2 - quantity of elements

// with splice is possible to add elements to specific positions too
// 1 - start position, 2- elements to be removed (0 is no element)
// 3... the elements that should be added to the array

console.log("Before: ", exampleArray);
exampleArray.splice(0, 0, -1, -2, -3);
console.log("After: ", exampleArray);



