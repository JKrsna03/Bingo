function generateRandomNumber(max)
{
    //return random number 0 to 15
    let rndmNumber = Math.floor(Math.random() * max) + 1;
    
    //if .... else if .... else statement
    //if(condition) {block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||
    
    if(rndmNumber <= 15) 
    {
       return console.log(`Random Number ${rndmNumber} is in B. 1-15`)
    }
    else if (rndmNumber >= 16 && rndmNumber <= 30)
    {
        return console.log(`Random number ${rndmNumber} is in I. 16-30`)
    }
    else if (rndmNumber >= 31  && rndmNumber <= 45) 
    {
        return console.log(`Random number ${rndmNumber} is in N. 31-45`)
    }
    else if (rndmNumber >= 46 && rndmNumber <= 60 ) 
    {
        return console.log(`Random number ${rndmNumber} is in G. 46-61`)
    }
    else if (rndmNumber >= 61 && rndmNumber <=75)
    {
        return console.log(`Random number ${rndmNumber} is in O. 61-75`)
    }
    else
    {
        return console.log(`Random Number is invalid`)
    }

}

generateRandomNumber(75);
console.log("Hello World");