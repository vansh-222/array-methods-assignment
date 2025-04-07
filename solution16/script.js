const words = ["apple", "banana", "kiwi", "grape"];

const totalCharacters = words.reduce((total, word) => total + word.length, 0);

console.log(totalCharacters);
