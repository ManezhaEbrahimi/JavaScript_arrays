// slice 
const fruits = ['Strawberry', 'Kiwi', 'apple', 'banana', 'cherry', 'Mango', 'Orange', 'Grapes'];
console.log(fruits);

const subArray = fruits.slice(1, 5);
console.log(`SubArray: ${subArray}`); // ['Kiwi', 'apple', 'banana', 'cherry']

// splice
fruits.splice(4, 1);
console.log(`Fruits array after splice: ${fruits}`); // ['Strawberry', 'Kiwi', 'apple', 'banana', 'Mango', 'Orange', 'Grapes']

fruits.splice(3, 0, 'Pineapple', 'Peach'); 
console.log(`fruits array after splice adding elements: ${fruits}`); // ['Strawberry', 'Kiwi', 'apple', 'Pineapple', 'Peach', 'banana', 'Mango', 'Orange', 'Grapes']

fruits.splice(4, 2, "Papaya", "Watermelon");
console.log(`Fruits array after splice replacing elements: ${fruits}`); // ['Strawberry', 'Kiwi', 'apple', 'Pineapple', 'Papaya', 'Watermelon', 'Mango', 'Orange', 'Grapes']

// indexOf
const indexOfEle = fruits.indexOf("Mango");
console.log(indexOfEle);

const includesEle = fruits.includes("Grapes");
console.log(includesEle); // true

// map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It does not change the original array.
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
nums.forEach(num => console.log(num * 2));

console.log(nums); // [1, 2, 3]
console.log(doubled); // [2, 4, 6]

// filter 
const ages = [12, 18, 20, 15, 22];
const adults = ages.filter(age => age >= 18); // adults is [18, 20, 22]
console.log(adults);

// reduce 
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
const multiply = numbers.reduce((total, num) => total + num, 1);
console.log(sum);
console.log(multiply);

0 + 1
1 + 2
3 + 3
6 + 4
10 + 5
15