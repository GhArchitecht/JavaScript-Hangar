/* 
      JavaScript Everywhere
 */
//Prompts a name and shows an image 
var Enteredname = prompt("what is your name?");
alert(`Hi, ${Enteredname}. Want to see something cool?`);
document.querySelector('html').innerHTML =  `
    <h1>Welcome to ${Enteredname}'s site!</h1>
    <img src="https://media4.giphy.com/media/o0vwzuFwCGAFO/giphy.gif?cid=790b761106e5b55938c55f760c27036355cde53823d1807a&rid=giphy.gif&ct=g">`;

//Display messages with JavaScript 

//Outputs a message through a browser prompt
alert("Hello GhArchitecht");

//Outputs a JS Console message
console.log("Hello GhArchitecht")

//Outputs a message in the browser window
document.write("Welcome to my web page")

//Final 
alert("Hello thanks for Visiting!");
console.log("Hello thanks for Visiting!")
document.write("<h1>Hello thanks for Visiting!</h1>")

//Linking a JS file  to an HTML
//<script src="js/script.js"</script> you can uses it either with html file 
alert("Hey, you're back for more")

//My First Javascript program

//Display an alert dialog with the content: "Warning! This message will self-destruct in"
alert("Warning! This message will self-destruct in");

//Display a "3... 2... 1..." countdowm using 3 alert dialog boxes 
alert("3..."); 
alert("2...");
alert("1...");

//This statement selects the <h1> element and replaces its text with "BOOM!"
document.querySelector("h1").textContent = "BOOM!"

//Log "Message destroyed!" to the console
console.log("Message destroyed")


//Variables
var message = "Hello!";
console.log(message);

var score = 0;
score = 10;
score += 3;

var bonusPTS = 100;
var finalScore = score +  bonusPTS
console.log(finalScore)

const scoring = 5
console.log(scoring)

//Stings
const htmlSnippet = '<h1 class="headline">My Headline</h1>';
const message='Hello World!';
const message = "'I'm a progerammer!";
console.log(message)


const multiline = "Hello, students\
Welcome to JavaScript Basics.\
I hope you learn a lot!";
console.log(multiline);

 const passphrase = "Open Seasame";

//Using properties
console.log(passphrase.length);
console.log("This is my string".length) ;


//Using my methods
const phrase =  "I HAVE SPOKEN";
const phrase_2 =  "i have spoken";
console.log(phrase.toLowerCase());
console.log(phrase_2.toUpperCase());

//Capturing Input
const name = prompt('What is your name?');
alert(name);
console.log(name);

//Combine Strings
const name = prompt("What is your name?");
let message = "Hello " + name + ".Welcome to my music site.";
message += "I'm so happy that you came by to visit, ";
message += name;
message += ". Feel free again to come and listen to more music.";
console.log(message);

//Practice combining strings
let firstName = "Joe";
let lastName = 'D';
let role = 'developer';

let msg  = firstName + " " + lastName + ": " + role

//Template Literals
const name = prompt("What is your name?");
const message = `Hello ${name},\ It's ${2 * 3} O'Clock\ Create a new line`;
console.log(message);


//Display the Value of a string on a Page
const stringToShout = prompt("What do you wnat to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>The message to shout is: ${shout}!!</h2>`;
document.querySelector('html').innerHTML = shoutMessage;
console.log(shoutMessage);

//Story Program - Mad Lib
let noun = prompt("Please enter a noun");
let verb = prompt("Please enter a verb ending in ING");
let adjective = prompt("Please enter an adjective");
const message = `<p>I am ${verb} JavaScript to be a ${adjective} ${noun} programmer</p>`
document.querySelector('html').innerHTML = message

//Quiz
const flavor = "Blueberry";
const type = "Smoothie";
const price = 4.99;

const drink = `${flavor} ${type}: $${price}`;

//Conditional Statements

//Contidional js
const answer = prompt('Which planet is closest to the sun?');

if ( answer.toLowerCase() === 'mercury') {
    console.log("That's correct")
} else {
    console.log("Sorry, that's incorrect");
}

//boolean.js
let correctGuess = false;
const number = 6;
const guess = prompt('Guess a number between 1 and 10')

//If statement
/*  Test if a player's  guess matches the number 
    Change the vakue of correctGuess from false to true
*/
if (+guess === number ){
    correctGuess = true;
}

//if else statement
if (correctGuess) {r
    console.log("You guessed the number!")
} else {
    console.log(`Sorry, the number was ${number}.`);
}

//Using an If Else statement
const weather = "sun"

if (weather === 'sun' ){
    console.log("it's sunny, so I'm going swimming.");
} else if (weather === 'sun' ){
    console.log("it's raininig so I will read a book.");
}
else if (weather === 'sun' ){
    console.log("it's snowing so I'm sledding");
}
else {
    console.log("I don't know what I am doing today.");
}

/* Conditional Quiz Application */
const Q1 = prompt("Who is/are the founder(s) of Microsoft");
const Q2 = prompt("Who is/are the founder(s) of Apple");
const Q3 = prompt("Who is/are the founder(s) of Oracle");
const Q4 = prompt("Who is/are the founder(s) of Twitter");
const Q5 = prompt("Who is/are the founder(s) of Google");

var ans1  = "bill gates"
var ans2 = "steve jobs"
var ans3 = "larry ellison"
var ans4 = "jack dorsey"
var ans5 = "larry page"

let rank = "";

let score = 0;

if (Q1 === ans1 ){
    score += 1
}
if (Q2 === ans2 ){
    score += 1
}
if (Q3 === ans3 ){
    score += 1
}
if (Q4 === ans4 ){
    score += 1
}
if (Q5 === ans5 ){
    score += 1
}

if (score === 5){
    rank = "Gold"
} else if(score === 3 || score === 4) {
    rank = "Silver"
} else if(score === 1 || score === 2 ){
    rank = "Bronze"
} else{
    rank = "No crown"
}

console.log(`Your quiz score is  ${score}, and you got a  ${rank} ranking`)
const results = `Your quiz score is  ${score}, and you got a  ${rank} ranking`
document.querySelector('html').innerHTML = results