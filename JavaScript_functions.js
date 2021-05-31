/* 
    JavaScript Functions
*/ 

//Creating an alert random function

//a function that generates random numbers <= 6
function alertRandom(){
    const randomNumber = Math.floor(Math.random()*6 ) + 1
    alert(randomNumber);
}

//Calling in an alert random function
alertRandom();

//Task - a function that says Hi
function sayHi(){
    alert("Hi")
}

sayHi();


//a function to get a random number
function getRandomNum(){
    const randomNumber = Math.floor(Math.random()*6 ) + 1
    return randomNumber;
}


alertRandom(getRandomNum());
console.log(getRandomNum());

const dieRoll = getRandomNum();

//Task - a function to get the current Year
function getYear(){
    const year = new Date().getFullYear();
    return year
}
const yearToday = getYear();


function isFieldEmpty(){
    const field = document.querySelector('#info');
    if (!field.value === '') {
        return true;
    } else {
        return false;
    }
}

const fieldTest = isFieldEmpty();

if (fieldTest){
    alert("Please Provide your information")
}


/* Pass Information Into Functions */
function getRandomNumber(upper){
    const randomNumber = Math.floor(Math.random()*upper) + 1
    return randomNumber;
}

console.log(getRandomNumber(100));
console.log(getRandomNumber(7200));
console.log(getRandomNumber(200));
console.log(getRandomNumber(700));


// Task - function to return a value parameter
function returnValue(value){
    return value;
}
//


function getArea(width, length, unit){
    const area = (width * length)
    return `${area} ${unit}`;
}

getArea(10,10, 'sq Ft');


//Task - fucntion to retun the largest number  
function max(value1, value2){
    if (value1 > value2){
        return value1
    } else {
        return value2
    }
}
console.log(max(93948, 839839));
//



/* Scope */

//Global scope
let person = 'Lee';

function greeting(){
    //function scope
    let person = 'Meg';
    alert(`Hi, ${person}`);
}

function greeting2(){
    //function scope
    let person = 'GHArchitecht';
    alert(`Good Morning, ${person}`);
}

greeting();
alert(`Hi, ${[person]}`);
greeting2();

/* Expresssions */

//Function Expressions
const getRandomNumber  = function(upper){
    const randomNumber = Math.floor(Math.random()*upper) + 1
    return randomNumber;
}

//Note Function Declarations are called first to the top of the global scope

/* Arrow Functions */
const getRandomNumber  = (upper) => {
    const randomNumber = Math.floor(Math.random()*upper) + 1
    return randomNumber;
}

//Arrow functions example
const getArea = (width, length, unit) => {
    const area = (width * length)
    return `${area} ${unit}`;
}

getArea(10,10, 'sq Ft');


function sayGreeting(greeting = 'Hi there', name= "GHArchitect"){
    return `${greeting}, ${name}`
}

 sayGreeting();


 function getArea(width, length, unit ='sq Ft'){
    const area = (width * length)
    return `${area} ${unit}`;
}

getArea(10,10, undefined);


//Documentation 
/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

 function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
  }


  /**
   *  Returns a random number between two numbers
   * 
   * @param {number} lower - The lowest number value.
   * @param {number} upper - The highest number value.
   * @return {number} The random value.
   * 
   * */

  function randomNumber(lower, upper = 10){

    if (isNaN(lower) || isNaN(upper)){
        throw Error('Both arguments must be numbers')
    } else {
        return Math.floor(Math.random()* (upper - lower + 1)) + lower;
    }
  }

  randomNumber(7,9);


//Call the function and past it different values


