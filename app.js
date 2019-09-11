'use strict';

console.log('Hello');

var person = prompt('What is your name?');
console.log('Your name is ' + person);
alert('Hi, ' + person + '! Welcome to my guessing game!');

var favpurp = prompt('Is my favorite color purple?');
if (favpurp.toLowerCase() === 'yes' || favpurp.toLowerCase === 'y'){
  alert('Correct!');
} else {
  alert('Incorrect!');
} console.log('answer is yes');

var pet = prompt('Do I have two pets?');
if (pet.toLowerCase() === 'yes' || pet.toLowerCase === 'y'){
  alert('Incorrect!');
} else {
  alert('Correct!');
} console.log('answer is no');

var city = prompt('Am I from Seattle?');
if (city.toLowerCase() === 'yes' || city.toLowerCase === 'y'){
  alert('Incorrect!');
} else {
  alert('Correct!');
} console.log('answer is no');

var sister = prompt('Do I have 2 sisters?');
if (sister.toLowerCase() === 'yes' || sister.toLowerCase() === 'y'){
  alert('Correct!');
} else {
  alert('Incorrect!');
} console.log('answer is yes');

var mate = prompt('Do I have two roommates?');
if (mate.toLowerCase() === 'yes' || mate.toLowerCase() === 'y'){
  alert('Correct!');
} else {
  alert('Incorrect!');
} console.log('answer is yes');
