///-----------------REST OPERATOR (Collect multiple values into single array)----------------///

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4));  // Output: 10

  
///-----------------SPREAD OPERATOR (Expands single array into multiple values)----------------///

function multiply(a, b, c) {
    return a * b * c;
  }
  
  const nums = [2, 3, 4];
  console.log(multiply(...nums));  // Output: 24
  