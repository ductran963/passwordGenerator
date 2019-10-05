
function clickGenerate() {
    var userLength = prompt("Please enter your password length between 8 and 128 inclusive:");
    var userAlert = alert("Please answer at least one the following questions to choose your Character Types including: Special characters, Numeric characters, Lowercase characters and Uppercase characters");
    var userSpecial = confirm("Would you like Special Characters for your password?");
    var userNumerical = confirm("Would you like Numerical Characters for your password?");
    var userLowerCase = confirm("Would you like Lowercase Characters for your password?");
    var userUpperCase = confirm("Would you like Uppercase Characters for your password?");
    if (userSpecial === true && userNumerical !== true && userLowerCase !== true && userUpperCase !== true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial === true && userNumerical === true && userLowerCase !== true && userUpperCase !== true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial === true && userNumerical !== true && userLowerCase === true && userUpperCase !== true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial === true && userNumerical !== true && userLowerCase !== true && userUpperCase === true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial === true && userNumerical === true && userLowerCase === true && userUpperCase !== true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial === true && userNumerical === true && userLowerCase !== true && userUpperCase === true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial === true && userNumerical !== true && userLowerCase === true && userUpperCase === true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial === true && userNumerical === true && userLowerCase === true && userUpperCase === true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial !== true && userNumerical === true && userLowerCase !== true && userUpperCase !== true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial !== true && userNumerical === true && userLowerCase === true && userUpperCase !== true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial !== true && userNumerical === true && userLowerCase !== true && userUpperCase === true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial !== true && userNumerical === true && userLowerCase === true && userUpperCase === true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial !== true && userNumerical !== true && userLowerCase === true && userUpperCase !== true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else if (userSpecial !== true && userNumerical !== true && userLowerCase === true && userUpperCase === true) {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
    else {
        generatePassword(userLength, userSpecial, userNumerical, userLowerCase, userUpperCase);
    }
}

function generatePassword(length, boolean1, boolean2, boolean3, boolean4) {
    userPass = "";
    var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var specialNumerical = "0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var specialLowercase = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var specialUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var specialNumericalLowercase = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var specialNumericalUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var specialLowercaseUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var specialNumericalLowercaseUppercase = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    var numericalChar = "0123456789";
    var numericalLowercase = "abcdefghijklmnopqrstuvwxyz0123456789";
    var numericalUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var numericalLowercaseUppercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var lowercaseUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (boolean1 === true && boolean2 !== true && boolean3 !== true && boolean4 !== true) {
        for (var i = 0; i < length; i++) {
            userPass += specialChar.charAt(Math.floor(Math.random() * (specialChar.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 === true && boolean2 == true && boolean3 !== true && boolean4 !== true) {
        for (var i = 0; i < length; i++) {
            userPass += specialNumerical.charAt(Math.floor(Math.random() * (specialNumerical.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 === true && boolean2 !== true && boolean3 === true && boolean4 !== true) {
        for (var i = 0; i < length; i++) {
            userPass += specialLowercase.charAt(Math.floor(Math.random() * (specialLowercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 === true && boolean2 !== true && boolean3 !== true && boolean4 === true) {
        for (var i = 0; i < length; i++) {
            userPass += specialUppercase.charAt(Math.floor(Math.random() * (specialUppercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 === true && boolean2 === true && boolean3 === true && boolean4 !== true) {
        for (var i = 0; i < length; i++) {
            userPass += specialNumericalLowercase.charAt(Math.floor(Math.random() * (specialNumericalLowercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 === true && boolean2 === true && boolean3 !== true && boolean4 === true) {
        for (var i = 0; i < length; i++) {
            userPass += specialNumericalUppercase.charAt(Math.floor(Math.random() * (specialNumericalUppercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 === true && boolean2 !== true && boolean3 === true && boolean4 === true) {
        for (var i = 0; i < length; i++) {
            userPass += specialLowercaseUppercase.charAt(Math.floor(Math.random() * (specialLowercaseUppercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 === true && boolean2 === true && boolean3 === true && boolean4 === true) {
        for (var i = 0; i < length; i++) {
            userPass += specialNumericalLowercaseUppercase.charAt(Math.floor(Math.random() * (specialNumericalLowercaseUppercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 !== true && boolean2 === true && boolean3 !== true && boolean4 !== true) {
        for (var i = 0; i < length; i++) {
            userPass += numericalChar.charAt(Math.floor(Math.random() * (numericalChar.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 !== true && boolean2 === true && boolean3 === true && boolean4 !== true) {
        for (var i = 0; i < length; i++) {
            userPass += numericalLowercase.charAt(Math.floor(Math.random() * (numericalLowercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 !== true && boolean2 === true && boolean3 !== true && boolean4 === true) {
        for (var i = 0; i < length; i++) {
            userPass += numericalUppercase.charAt(Math.floor(Math.random() * (numericalUppercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 !== true && boolean2 === true && boolean3 === true && boolean4 === true) {
        for (var i = 0; i < length; i++) {
            userPass += numericalLowercaseUppercase.charAt(Math.floor(Math.random() * (numericalLowercaseUppercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 !== true && boolean2 !== true && boolean3 === true && boolean4 !== true) {
        for (var i = 0; i < length; i++) {
            userPass += lowercaseChar.charAt(Math.floor(Math.random() * (lowercaseChar.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else if (boolean1 !== true && boolean2 !== true && boolean3 === true && boolean4 === true) {
        for (var i = 0; i < length; i++) {
            userPass += lowercaseUppercase.charAt(Math.floor(Math.random() * (lowercaseUppercase.length)));

        }
        document.getElementById("display").value = userPass;
    }

    else {
        for (var i = 0; i < length; i++) {
            userPass += uppercaseChar.charAt(Math.floor(Math.random() * (uppercaseChar.length)));

        }
        document.getElementById("display").value = userPass;
    }
}

function copyClipboard (){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");

}



