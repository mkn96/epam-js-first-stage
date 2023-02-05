// In a try catch construction, wrap the code: console.log (a), let a = 3. 
// And display an error - ‘let must be declared’ before use. 
// When running 1/0, the error 'cannot be divided by zero'

try {
    console.log(a);
    let a = 3;
    } catch (error) {
      console.log('let must be declared before use');
    }

// In JavaScript, division by zero yields Infinity 

function divide(numerator, denominator) {
    try {
      let result = numerator / denominator;
       if (denominator === 0) {
        throw new Error("Cannot be divided by zero");
    }
    return result;
    } catch (error) {
       console.log(error.message);
    }
    }
        
    console.log(divide(1, 0)); // Output: Cannot be divided by zero