// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/


// Lecture: operators
/*
var now = 2017
var birthYear = now - 26;
birthYear = now - 26 * 2; //operator precedence, multiplication comes first
//2017 - 52
//1965

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

// == does type conversion, === does not do type conversion
if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (23 == "23") { //more common to use === operator because it is safer to not do type conversion
    console.log('Something to print...');
}
*/


// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does John do for a living?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
    default:
        console.log('John does something else.');
}
*/

//////////////////////////////////////////////////////
// Coding Challenge 1
/*
CODING CHALLENGE 1

John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

var heightJohn = 180;
var ageJohn = 30;

var heightFriend = 180;
var ageFriend = 45;

var heightThirdPlayer = 180;
var ageThirdPlayer = 60;

var scoreJohn = heightJohn + (5 * ageJohn);
var scoreFriend = heightFriend + (5 * ageFriend);
var scoreThirdPlayer = heightThirdPlayer + (5 * ageThirdPlayer);

if (scoreJohn > scoreFriend && scoreJohn > scoreThirdPlayer) {
    console.log("John wins! His score is: " + scoreJohn);
} else if (scoreFriend > scoreJohn && scoreFriend > scoreThirdPlayer) {
    console.log("Friend wins! Friend score is: " + scoreFriend);
} else if (scoreThirdPlayer > scoreJohn && scoreThirdPlayer > scoreFriend) {
    console.log("ThirdPlayer wins! ThirdPlayer score is: " + scoreThirdPlayer);
} else {
    console.log("It's a tie! Each had: " + scoreJohn);
}
*/