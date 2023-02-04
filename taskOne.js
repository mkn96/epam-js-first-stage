const string = 'epam';
const boolean = true;
const number = 1;

// Perform addition of various types (string + boolean, string + number, number + boolean)
console.log(string + boolean); // "epamtrue"
console.log(number + boolean); // 2
console.log(number + string); // "1epam"

// Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log(string * boolean); // NaN
console.log(number * boolean); // 1
console.log(number * string); // NaN

// Divide different types (string / boolean, string / number, number / Boolean)
console.log(string / boolean); // NaN
console.log(number / boolean); // 1
console.log(number / string); // NaN

// Perform explicit conversion (number, string, boolean)
console.log(Number(number)); // 1
console.log(String(number)); // "1"
console.log(Boolean(number)); // true

console.log(Number(string)); // NaN
console.log(String(string)); // "epam"
console.log(Boolean(string)); // true

console.log(Number(boolean)); // 1
console.log(String(boolean)); // "true"
console.log(Boolean(boolean)); // true
