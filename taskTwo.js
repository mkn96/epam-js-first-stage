  // Create a car object, add a color property to it with the value equals 'black'
  let car = {
    color: 'black'
  };
  
  // Change the color property of the car object to 'green'
  car.color = 'green';
  
  // Add the power property to the car object, which is a function and displays the engine power to the console
  car.power = function() {
    console.log('Engine power is 250bhp');
  };
  
  // Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
  function totalFruits(pears, apples) {
    return pears + apples;
  }

  // Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
  function myName(name) {
    console.log(name ? `Hello, ${name}` : 'There is no such name');
  }
  
  // Write a function for calculating the type of argument and type output to the console
  function checkType(arg) {
    console.log(`Type of argument: ${typeof arg}`);
    console.log(`Type of output: ${typeof typeof arg}`);
  }
  
  // Write a function that determines whether a number is prime or not
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  