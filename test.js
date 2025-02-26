import functions from './index.js'

console.log(functions(["Alan", "Turing", "aturing@w3c.com", 58])); // should return true
console.log(functions(["Alan", "Turing", "     ", 58])); // should return false
console.log(functions(["Alan", "Turing"])); // should return false