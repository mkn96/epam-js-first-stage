/* 
Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
Given an array of car manufacturers, convert the array to a string and back to an array
Given an array of the names of your friends, add the words hello to each element of the array
Convert numeric array to Boolean
Sort the array [1,6,7,8,3,4,5,6] in descending order
Filter array [1,6,7,8,3,4,5,6] by value> 3
Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
Implement a loop that will print the number 'a' until it is less than 10
Implement a loop that prints prime numbers to the console
Implement a loop that prints odd numbers to the console
*/

const movieNames = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II', 'The Dark Knight', '12 Angry Men'];

for (let i = 0; i < movieNames.length; i++) {
  console.log(movieNames[i]);
}

const carManufacturers = ['Toyota', 'Honda', 'BMW', 'Mercedes-Benz'];
const carManufacturersString = carManufacturers.join(',');
const carManufacturersArray = carManufacturersString.split(',');
console.log(carManufacturersArray);

const friends = ['John', 'Jane', 'Jim'];
const greetingFriends = [];

for (let i = 0; i < friends.length; i++) {
  greetingFriends.push(`Hello, ${friends[i]}`);
}
console.log(greetingFriends);

const numbers = [1, 2, 0, -1];
const booleans = numbers.map(number => Boolean(number));
console.log(booleans);

numbers.sort((a, b) => b - a);
console.log(numbers);

const filteredNumbers = numbers.filter(number => number > 3);
console.log(filteredNumbers);

function findIndex(array, number) {
  return array.indexOf(number);
}
console.log(findIndex([1, 2, 3, 4, 5], 3));

for (let i = 0; i < 10; i++) {
  console.log(i);
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
