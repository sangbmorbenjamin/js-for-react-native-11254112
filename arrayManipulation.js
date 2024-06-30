// arrayManipulation.js

// Task 1: Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square even numbers
        } else {
            return number * 3; // Triple odd numbers
        }
    });
}

// Task 2: Function to format array of strings based on processed numbers
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Export the functions for use in other files
module.exports = {
    processArray,
    formatArrayStrings
};
