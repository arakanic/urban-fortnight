// Assuming input will always be a string and never empty, return the length of the shortest word from a string of words:

const findShort = (s) => Math.min.apply(null, s.split(" ").map(word => word.length))