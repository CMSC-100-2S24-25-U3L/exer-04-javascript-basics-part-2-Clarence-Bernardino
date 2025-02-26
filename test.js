import {addAccount} from './index.js'

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58])); // should return true
console.log(addAccount(["Alan", "Turing", "     ", 58])); // should return false
console.log(addAccount(["Alan", "Turing"])); // should return false