'use strict';

console.log('Hello');

var person = prompt('What is your name?');
console.log('Your name is ' + person);
alert('Hi, ' + person + '! Welcome to my guessing game!');
var final = 0;

var favPurp = prompt('Is my favorite color purple?');
function purple () {
  if (favPurp.toLowerCase() === 'yes' || favPurp.toLowerCase() === 'y'){
    final++;
    alert('Correct!');
  } else if (favPurp.toLowerCase() === 'no' || favPurp.toLowerCase() === 'n'){
    alert('Incorrect!');
  } else {
    alert('Invalid response.');
  } console.log('answer is yes');
}
purple();

var pet = prompt('Do I have two pets?');
function pets () {
  if (pet.toLowerCase() === 'yes' || pet.toLowerCase() === 'y'){
    alert('Incorrect!');
  } else if (pet.toLowerCase() === 'no' || pet.toLowerCase() === 'n'){
    final++;
    alert('Correct!');
  } else {
    alert('Invalid response.');
  } console.log('answer is no');
}
pets();

var city = prompt('Am I from Seattle?');
function home () {
  if (city.toLowerCase() === 'yes' || city.toLowerCase() === 'y'){
    alert('Incorrect!');
  } else if (city.toLowerCase() === 'no' || city.toLowerCase() === 'n'){
    final++;
    alert('Correct!');
  } else {
    alert('Invalid response.');
  } console.log('answer is no');
}
home();

var sister = prompt('Do I have 2 sisters?');
if (sister.toLowerCase() === 'yes' || sister.toLowerCase() === 'y'){
  final++;
  alert('Correct!');
} else if (sister.toLowerCase() === 'no' || sister.toLowerCase() === 'n'){
  alert('Incorrect!');
} else {
  alert('Invalid response');
} console.log('answer is yes');

var mate = prompt('Do I have two roommates?');
if (mate.toLowerCase() === 'yes' || mate.toLowerCase() === 'y'){
  final++;
  alert('Correct!');
} else if (mate.toLowerCase() === 'no' || mate.toLowerCase() === 'n'){
  alert('Incorrect!');
} else {
  alert('Invalid response.');
} console.log('answer is yes');



for (var i = 0; i < 4; i++){
  var num = parseInt(prompt('Guess a number between 1 and 50'));
  var counter = i;
  if (num === 16){
    final++;
    alert('correct!');
    break;
  } else if (num < 16) {
    alert('Too low!');
  } else if (num > 16){
    alert('Too high!');
  } else{
    alert('invalid response');
  }
  if (counter === 3){
    alert('Incorrect. The answer was 16.');
    console.log('answer is 16');
  }
}
var userCorrect = false;
var topp = ['olives', 'mushrooms', 'pineapple', 'bacon'];
var guess = 0;
var pizza = prompt('Can you guess one of my favorite pizza toppings?').toLowerCase();
console.log(topp.length);
while (guess < 6){
  console.log(guess);
  for (var j = 0; j < topp.length; j++){
    if (pizza === topp[j]){
      final++;
      alert('Correct! All correct answers are olives, mushrooms, pineapple, and bacon.');
      guess = 7;
      userCorrect = true;
      break;
    }
  }
  if (guess !== 6){
    pizza = prompt('Try again!').toLowerCase();
  }
  guess++;
}
if (userCorrect === false){
  alert('Out of tries! The correct answers were olives, bacon, pineapple, and mushrooms.');
}
alert('You got ' + final + ' answers correct out of 7 questions!');
