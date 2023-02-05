// How would you optimize this code to follow clean code principles 
// and best practices in terms of naming conventions, readability, maintainability, and functionality?


// Add up the numbers between the starting position and the end position
function sum(fistNumber, lastNumber) {
    let total = 0;
    for (let index = fistNumber; index <= lastNumber; index++) {
        total = total + index;
    }
    return total;
}

// Condition: true => result = result of sum(fistNumber,lastNumber) * 2
// Condition: false => result = sum(fistNumber,lastNumber)
function calc(fistNumber, lastNumber, condition) {
    let result = sum(fistNumber,lastNumber);
    if(condition === true) {
        result = result * 2;
    }
    return result;
}

