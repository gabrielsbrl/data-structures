// some array methods that can be useful

let exampleArray = [3, 3,4,5,6,7,8,2,34,23,4,754,1];

// sorting items "ascending"
exampleArray.sort((a, b) => {
    if(a < b) return -1;
    if(a === b) return 0;
    if(a > b) return 1;
});
console.log("Ascending: ", exampleArray);
// sorting items "descending"
exampleArray.sort((a, b) => {
    if(a < b) return 1;
    if(a === b) return 0;
    if(a > b) return -1;
});
console.log("Descending: ", exampleArray);

// slide examples
// first position is inclusive, last position is not inclusive
// the slice function returns a new list, letting the original list immutable
let slicedArray = exampleArray.slice(1, 5);
console.log("sliced array: ", slicedArray);
console.log("original array: ", exampleArray);
