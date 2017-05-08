//////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////
// Lecture: functions
/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/


//////////////////////////////////////////////////////
// Lecture: statements and expressions
/*
function someFunc(par) {
    //code
} //function statement - performs an action (no output)

var someFunc = function(par) {
    //code
} //function expression - produces value (outcome)

//Expressions
3 + 4;
var x = 3;

//Statements
if (x === 5) {
    //do something
}
*/


//////////////////////////////////////////////////////
// Lecture: arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop(); //remove last element
john.shift(); //remove first element
console.log(john);

if (john.indexOf('teacher') === -1 ) {
    console.log('John is NOT a teacher.');
}
*/

//////////////////////////////////////////////////////
// Lecture: objects and properties
// Objects = key-value pair. Group together different variables with no particular order. Each key-value pair is a property.
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


//////////////////////////////////////////////////////
// Lecture: objects and methods
/*
// v1.0
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
};

// use the object's available method (function)
//console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age; //insert new key-value pair into object

console.log(john);

// v2.0
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        //return 2017 - this.yearOfBirth;
        this.age = 2017 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/

