function StringChallenge(str) {
    // Initialize variables
    let compressed = "";
    let count = 1;
    let varOcg = str[0]; // Set the first character as the starting point

    // Iterate through the string to build the compressed version
    for (let i = 1; i < str.length; i++) {
        if (str[i] === varOcg) {
            count++; // Increment count for repeating characters
        } else {
            compressed += count + varOcg; // Append the count and character
            varOcg = str[i]; // Update to the new character
            count = 1; // Reset count
        }
    }
    // Add the final group to the compressed string
    compressed += count + varOcg;

    // Replace characters in the ChallengeToken with the required format
    const challengeToken = "iudpkf4bx98";
    const finalOutput = compressed.split('').map(char => {
        return challengeToken.includes(char) ? `--[${char}]--` : char;
    }).join('');

    return finalOutput;
}

// Examples
console.log(StringChallenge("aabbcde")); // Output: 2a2--b--1c1--d--1e
console.log(StringChallenge("wwwbbbw")); // Output: 3w3--b--1w
