'use strict';

console.log('Hello');

//Prompt name
var person = prompt('What is your name?');
console.log('Your name is ' + person);
alert('Hi, ' + person + '! Welcome to my guessing game!');
var final = 0;

//Question 1 - favorite color
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

//Question 2 - how many pets
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

//Question 3 - city I'm from
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

//Question 4 - how many sisters
var sister = prompt('Do I have 2 sisters?');
function family () {
  if (sister.toLowerCase() === 'yes' || sister.toLowerCase() === 'y'){
    final++;
    alert('Correct!');
  } else if (sister.toLowerCase() === 'no' || sister.toLowerCase() === 'n'){
    alert('Incorrect!');
  } else {
    alert('Invalid response');
  } console.log('answer is yes');
}
family();

//Question 5 - how many roommates
var mate = prompt('Do I have two roommates?');
function apartment () {
  if (mate.toLowerCase() === 'yes' || mate.toLowerCase() === 'y'){
    final++;
    alert('Correct!');
  } else if (mate.toLowerCase() === 'no' || mate.toLowerCase() === 'n'){
    alert('Incorrect!');
  } else {
    alert('Invalid response.');
  } console.log('answer is yes');
}
apartment();

//Question 6 - guess a number game
function guessNum () {
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
}
guessNum();

//Question 7 - guess what I like on pizza
function guessToppings () {
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
        guess = 6;
        userCorrect = true;
        break;
      }
    }
    if (guess !== 6 ){
      pizza = prompt('Try again!').toLowerCase();
    }
    guess++;
  }
  if (userCorrect === false){
    alert('Out of tries! The correct answers were olives, bacon, pineapple, and mushrooms.');
  }
}
guessToppings();

alert('You got ' + final + ' answers correct out of 7 questions!');
