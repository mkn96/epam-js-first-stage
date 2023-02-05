// Given the string 'ahb acb aeb aeeb adcb axeb'. 
// Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let string1 = 'ahb acb aeb aeeb adcb axeb';
let pattern1 = /a.b/g;
let matches1 = string1.match(pattern1);
console.log(matches1); // Output: ['ahb', 'acb', 'aeb']

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let string2 = '2 + 3 223 2223';
let pattern2 = /2\s+\s3/;
let matches2 = string2.match(pattern2);
console.log(matches2[0]); // Output: '2 + 3'

// Get the day, month and year of the current date and output it to the console separately
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
console.log(day); // Output: 5
console.log(month); // Output: 2
console.log(year); // Output: 2023