// Function to find the longest word in the string and replace characters based on ChallengeToken
function StringChallenge(sen) {
    // Variable to store the longest word
    let varOcg = ""; 
    
    // Variable to store the filtered words
    let varFiltersCg = sen.match(/[a-zA-Z0-9]+/g);
    
    // Find the longest word
    for (let word of varFiltersCg) {
        if (word.length > varOcg.length) {
            varOcg = word;
        }
    }
    
    // ChallengeToken to map characters
    let challengeToken = "p52xsheod6bc";
    
    // Replace characters in the longest word based on ChallengeToken
    let finalOutput = [...varOcg].map(char => 
        challengeToken.includes(char) ? `--${char}--` : char
    ).join("");
    
    // Return the final transformed output
    return finalOutput;
}

// Example usage
console.log(StringChallenge("fun&!! time")); // Output: tim--e--
console.log(StringChallenge("I love dogs")); // Output: l--o--v--e--


