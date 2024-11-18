function replaceMostFrequentCharWithoutReplace(str) {
    const charCount = {}; // Object to count occurrences of each character

    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the most frequent character
    let mostFrequentChar = '';
    let maxCount = 0;
    for (const char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            mostFrequentChar = char;
        }
    }

    // Manually create a new string by replacing occurrences of the most frequent character
    let result = '';
    for (let i = 0; i < str.length; i++) {
        // If the current character is the most frequent character, replace it with '*'
        if (str[i] === mostFrequentChar) {
            result += '*';
        } else {
            result += str[i];
        }
    }

    return result; // Return the modified string
}

const inputString = "hello world";
const modifiedString = replaceMostFrequentCharWithoutReplace(inputString);
console.log(modifiedString);  
