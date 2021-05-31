/* 
    JavaScript Loops
*/ 


// using a while loop
function getRandomNumber(upper){
    return Math.floor(Math.random()* upper) + 1
}

let counter = 0;
while (counter < 10 ) {
    console.log(`The random number is ${getRandomNumber(10)}`);
    counter += 1;
}

// Do While loop
function getRandomNumber(upper){
    return Math.floor(Math.random()* upper) + 1
}
let counter = 0 
do {
    console.log(`The random number is ${getRandomNumber(10)}`);
    counter += 1;

} while ( counter < 9);

//Use do while loop when you need your loop to excute one last time amd use while when you need to check a condition

// Task - while loop
let count = 0;

while (count < 27){
  console.log(count)
  count++
}


// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"
let secret = prompt("What is the secret password?");

do {
 secret = prompt("What is the secret password?");
} while( secret !== 'sesame');

// This should run after the loop is done executing
alert("You know the secret password. Welcome!");
////

//For loop 

function getRandomNumber(upper){
    return Math.floor(Math.random()* upper) + 1
}
for (let i = 0; i < 1000; i++  ) {
    console.log(`The random number is ${getRandomNumber(10)}`)
}

// a loop that logs 5 to 100
for (let i = 5; i < 100; i++ ){
    console.log(i)
  }


  const main = document.querySelector('html');
  let div = '';

  for (let i = 0; i< 10; i++ ){
    div += `<div>${i}</div>`;
  }

  main.innerHTML = div;
   

//Exit loops
let message = "supercalifragilisticexpialidocious";
message = message.length;

for ( let i = 1; i < message; i++ ) {
  if ( i === message / 2 ) {
    console.log('The loop has terminated...');
    break;
  }
  console.log(`Logging the number ${i}`);{
  }
}
console.log('The program continues...');

/* Refractor Challenge */
//Wrong
let html ='';
let red;
let green;
let randomRGB;

for (let i = 1; i <=10; i++){
    for (let i = 1; i <= 3; i++){
        rgb = Math.floor(Math.random() * 256);
    }
    randomRGB = `rgb ${rgb}`

    html += `<div> style="background-color: ${randomRGB}>${i}</div> `;
}


let html ='';
const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(){
    const rgb = ` r${randomValue}, b${randomValue}, g${randomValue}`
    return rgb
}

for (let i = 1; i <=10; i++){
    html += `<div> style="background-color: ${randomRGB()}>${i}</div> `;
}


let number
for ( number = 2; number <=24; number +=2){
    console.log(number)
  }