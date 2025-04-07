const words = ["Hello", "My", "Name", "is", "Vansh", "I", "am", "a", "developer"];

const sentence = words.reduce((acc, word) => acc + " " + word);

console.log(sentence);
