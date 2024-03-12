console.log("Hello World");

function generateRandomNumber()
{
    //return random number 0 to 10
    let rndmNumber = (Math.floor(Math.random() * 15) + 1);

    //if .... else if .... else statement
    //if(condition) {block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||

    if(rndmNumber >= 5) 
    {
        console.log(`Random Number is >= to 5`)
    }
    else{
        console.log(`Random Number is <= to 5`)
    }

    return console.log(rndmNumber);
}