///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2017 - year);
}

// retirement(1956); --> this will not work with hoisting, as hoisting only works for function declarations. Hoisting can work with variables but in a different way.

var retirement = function(year) {
    console.log(65 - (2017 - year));
}

// variables
console.log(age); // with hoisting code is scanned for variable declarations and these are initialized as undefined.
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65; // this uses function execution context object
    console.log(age);
}
foo();
console.log(age); // this uses global execution context object
*/


///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2017 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearofBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearofBirth);

        /*
        function innerFunction() { // even though this is written inside of an object, still a regular function
            console.log(this); // thus will return the global object (the window object, in the browser)
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearofBirth: 1984
};

mike.calculateAge = john.calculateAge; // method-borrowing, treat function as variable
mike.calculateAge();