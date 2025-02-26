import { appendFileSync } from 'node:fs';
import isEmail from 'validator/lib/isEmail.js';
import { v4 as uuidv4 } from 'uuid';

function generateUniqueID(firstName, lastName) {
    // check if they are strings
    if (typeof firstName !== "string" || typeof lastName !== "string") {
        return false;
    }

    // generateUniqueID(“Alan”, “Turing”)
    // returns: “aturing5133f34e”
    const FirstLetter = firstName[0].toLowerCase();
    const LastName = lastName.toLowerCase();
    const uniqueString = uuidv4().substring(0, 8) // get only 8 letters

    return FirstLetter + LastName + uniqueString;
}

export function addAccount(userData) {
    // e.g addAccount([“Alan”, ”Turing”, “aturing@w3c.com”, 58]);

    // 1 Prepared by CAG Angcana

    // - If the following conditions are true


    // - the email is in a valid format (use the validator package)
    // - age is at least 18

    // - all fields are present
    // check if the array is indeed an array or if the array is the correct size
    if (!Array.isArray(userData) || userData.length !== 4) {
        console.log("Error at: check if the array is indeed an array or if the array is the correct size");
        return false;
    }

    // populate placeholder array
    const [firstName, lastName, email, age] = userData;

    // check if they are strings or not
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
        console.log("Error: Fields cannot be empty or just spaces");
        return false;
    }

    // - the first name, last name, and email are non-empty strings
    // use trim to make sure "   " are not allowed
    if (!firstName.trim() && !lastName.trim() && !email.trim()) {
        console.log("Error at: use trim to make sure  '   ' are not allowed");
        return false
    }
    
    if (!isEmail(email)) {
        console.log("Error at: !validator.isEmail(email)");
        return false;
    }

    if (typeof age !== "number" || age < 18) {
        console.log("Error at: typeof age !== 'number' || age < 18");
        return false;
    }

    const uniqueID = generateUniqueID(firstName, lastName);
    const saveToUsers = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

    // apped to file, error checking from geeks for geeks
    appendFileSync("users.txt", saveToUsers, "utf8", function (err) {
        if (err) {
            console.log("Error writing to file:", err);
            return false;
        }
        console.log("Data successfully saved.");
    });
    return true;
}