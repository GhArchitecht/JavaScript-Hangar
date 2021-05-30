/* 

JavaScript Numbers

*/

/* Working with Numbers */
age =29

/* js Math calculations */
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour* hoursPerDay
console.log(`There are ${secondsPerDay} seconds in a day`)

const yearsAlive = 22;
const yearsAliveInSecs = yearsAlive * secondsPerDay; 
console.log(`I've been alive for more than ${yearsAliveInSecs} seconds`)


/* a js program that calculates the sale total, profit and profit per item sold */
const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;

const SalesTotal = retailPrice * quantity
const profit = salesTotal - (wholesalePrice * quantity)
const profitPerUnit = profit /quantity


//Treating String As Numbers
const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

const totalBadges = +HTMLBadges +  +CSSBadges; //parsing strings into integers with the unary operator
const totalBadges = parseInt(HTMLBadges)  + parseInt(CSSBadges); //parsing strings into integers

console.log(totalBadges);
console.log(typeof parseInt(HTMLBadges) + typeof CSSBadges); //Using typeof operator to check a variabl e type 

const pi = "3.14";
console.log( parseFloat(pi));//parsing Float

const width = '190px';
const totalImages = 10;
const TotalWidth = parseInt(width) * totalImages

/* Working with the Math Object */

console.log(Math.floor(Math.random()* 6) +1)

//Roll dice program
const dieRoll = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled lucky number ${dieRoll}`);

const temperature = 37.5;
const tempRounded = Math.round(temperature);
const tempRoundDown = Math.floor(temperature);


/* Progamming Challenge - Random number generator*/
const inputNum = prompt("Please give me any number ");
const parsedNum = parseInt(inputNum);

//
if (parsedNum) {
    const generateRandomNum = Math.floor(Math.random() * parsedNum + 1)

    console.log( `The random number generated is ${generateRandomNum}`)
} else{
    console.log('Please enter a valid number?')
}


/* Programming Challenge II - Random # generator II */
const inputHigh = prompt("Please provide a number");
const inputLow = prompt(`Please provide a number lower than ${inputHigh} `);

const highNumber = parseInt(inputHigh);
const lowNumber = parseInt(inputLow);

if ( highNumber && lowNumber) {
    const RandomNumber = Math.floor(Math.random() * (highNumber - lowNumber + 1 )+ lowNumber);

    console.log( `The random number generated is ${RandomNumber}`)
} else{
    console.log('Please enter a valid number?')
}


