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
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
};

instructor[favoriteNumber] = "That is my favorite!";

// Computed property names: ES2015 (refactored) version


// Object methods: ES5 version
var instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function(){
        return this.firstName + " says bye!";
    }
}


// Object methods: ES2015 (refactored) version


// createAnimal function
