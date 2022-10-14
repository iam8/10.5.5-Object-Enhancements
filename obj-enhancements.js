// Ioana Alex Mititean
// 10/14/22
// Exercise 10.5.5: Object Enhancements


// Same keys and values: ES5 version
function es5CreateInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

// Same keys and values: ES2015 (refactored) version
const createInstructor = (firstName, lastName) => ({firstName, lastName});


// Computed property names: ES5 version
var es5FavoriteNumber = 42;

var es5Instructor = {
    firstName: "Colt"
};

es5Instructor[es5FavoriteNumber] = "That is my favorite!";

// Computed property names: ES2015 (refactored) version
const favoriteNumber = 42;

const instructor0 = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}


// Object methods: ES5 version
var es5Instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function(){
        return this.firstName + " says bye!";
    }
}

// Object methods: ES2015 (refactored) version
const instructor1 = {
    firstName: "Colt",
    sayHi() {return "Hi!"},
    sayBye() {return this.firstName + " says bye!"}
}


// createAnimal function
// Object enhancements used: same key-value name, computed property name, object method shorthand
function createAnimal(species, verb, noise) {

    return {
        species,
        [verb]() {console.log(noise)},
    }
}