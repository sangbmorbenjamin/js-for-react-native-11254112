// userInfo.js

// Import the necessary functions from arrayManipulation.js
const { formatArrayStrings } = require('./arrayManipulation');

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1, // Auto-incremented ID starting from 1
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Export the function for use in other files
module.exports = {
    createUserProfiles
};
