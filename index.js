let B = false,
    I = false,
    N = false,
    G = false,
    O = false;
function generateRandomNumber(max) {
    //return random number 0 to 15
    let rndmNumber = Math.floor(Math.random() * max) + 1;

    //if .... else if .... else statement
    //if(condition) {block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||

    if (rndmNumber <= 15) {
        console.log(`Random Number ${rndmNumber} is in B. 1-15`)
        B = true;
    }
    else if (rndmNumber >= 16 && rndmNumber <= 30) {
        console.log(`Random number ${rndmNumber} is in I. 16-30`)
        I = true;
    }
    else if (rndmNumber >= 31 && rndmNumber <= 45) {
        console.log(`Random number ${rndmNumber} is in N. 31-45`)
        N = true;
    }
    else if (rndmNumber >= 46 && rndmNumber <= 60) {
        console.log(`Random number ${rndmNumber} is in G. 46-61`)
        G = true;
    }
    else if (rndmNumber >= 61 && rndmNumber <= 75) {
        console.log(`Random number ${rndmNumber} is in O. 61-75`)
        O = true;
    }
    else {
        console.log(`Random Number is invalid`)
    }
    if (B == true && I == true && N == true && G == true && O == true) {
        console.log(`BINGO!!!`)
    }

}

generateRandomNumber(75);
console.log("Hello World");   