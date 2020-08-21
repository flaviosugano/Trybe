// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3))

/*******************************************/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

/******************************************/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday} = HIGH_TEMPERATURES;
const {tomorrow: highTomorrow} = HIGH_TEMPERATURES; 

// Only change code above this line

/******************************************/

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

// Only change code above this line

/****************************************/

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

/****************************************/

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [,,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

/****************************************/


const nationalityFunc = ({ firstName, nationality = 'brazilian'}) => `${firstName} is ${nationality}`

let person = {
    firstName: "João",
    lastName: "Jr II",
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationalityFunc(otherPerson)) // Ivan is Russian
console.log(nationalityFunc(person))