// fs = require("fs");
// vuid = require("vuid");
// validator = require("validator");
// import isEmail from 'validator/lib/isEmail';

function generateUniqueID(firstName, lastName) {
    // check if they are strings
    if (typeof firstName !== "string" && typeof lastName !== "string") {
        return false;
    }  

    // generateUniqueID(“Alan”, “Turing”)
    // returns: “aturing5133f34e”
    const FirstLetter = firstName[0].toLowerCase();
    const LastName = lastName.toLowerCase();
    const uniqueString = vuid().substring(0, 8) // get only 8 letters

    return FirstLetter + LastName + uniqueString;
}

function addAccount(userData) {
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
    if (typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string") {
        console.log("Error at: check if they are strings or not");
        return false;
    }

    // - the first name, last name, and email are non-empty strings
    // use trim to make sure "   " are not allowed
    if (!firstName.trim() && !lastName.trim(), !email.trim()) {
        console.log("Error at: use trim to make sure  '   ' are not allowed");
        return false
    }
    
    if (!validator.isEmail(email)) {
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
    fs.appendFile("users.txt", saveToUsers, "utf8",
        // callback function
        function (err) {
            if (err) throw err;

            // if no error
            console.log("Data is appended to file successfully.");
            return true;
        }
    )
}

export default addAccount