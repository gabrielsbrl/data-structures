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

// indexOf
let daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(daysOfWeek.indexOf('test') !== -1 ? 'Exists!' : 'Not found in the array!');
console.log(`The position of the monday in the days of week array: ${daysOfWeek.indexOf('test')}`);

// lasIndexOf - it will return the last occurrence of the informed array of the searching data
// in this case should return the number of the last occurrence, so 0
console.log('When the value exists in the array: ', daysOfWeek.lastIndexOf('monday'));
// in this case, should return -1
console.log('When searching for something that dont exists in the array: ', daysOfWeek.lastIndexOf('test'));


// slice
// creating new array based on the days of week array, we will try to create a working days array
console.log(daysOfWeek.slice(0, 5));
// its exclusive, so if you want the value, you must specify it, in this case the 5 represents
// the friday, that would be left out of the presentation

// find -- based on a callback function, it will return the value searched based on a logical statement
// if the statement returns true, it will return the value, or object
console.log(daysOfWeek.find(e => e === 'monday'));

// fill "fill" the array with a static value
let arrOfNames = Array(10).fill('Gabriel');
console.log(arrOfNames);

// iterating thru the list of names using for of loop
for (let name of arrOfNames) {
    console.log(`The name is ${name}`);
}

// iterating thru the list of names with the iterator
let iterator = arrOfNames[Symbol.iterator]();
// then using the iterator we can print the values passing it to a for of function
for (const name of iterator) {
    console.log(`The name using iterator ${name}`);
}

// using from to create a new array based on another
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbersArray = Array.from(numbers, x => (x % 2 === 0))
console.log('New array created with from: ', evenNumbersArray);