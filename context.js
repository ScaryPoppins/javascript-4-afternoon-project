/* 
  Once you complete a problem, refresh ./context.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Context is the value of the "this" keyword which is a reference to the object that "owns" the executing code
*/


////////// PROBLEM 1 //////////

/*
  Create an object called user which has the following properties.
  username --> which is a string
  email --> which is a string
  getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*
*/
  

//Code Here
// TRY NUMBER ONE--------------------------------------------------------------
let user = {
  username: 'Mark', 
  email: 'mark_nagel@hotmail.com', 
  getUsername: function(){
      return this.username;
  }
}
// TRY NUMBER TWO -------------------------------------------------------------
// let user = {
//   this.username: [  ], 
//   this.email: [  ], 
//   getUsername: function(){
//       return this.name;
//   }
// }
// TRY NUMBER THREE -----------------------------------------------------------
// class user {
//   constructor(username, email){
//     this.username = username;
//     this.email = email;
//     getUsername =  function(){
//       return this.name;
//   }
// }




////////// PROBLEM 2 //////////

/*
 Below we have the class Animal.  The eat method is using the "this" keyword.  Use the "new" keyword to assign context to "this", and save the instance to a variable named animal1.  You can pass anything you want in for name, species and food.
*/

class Animal {
  constructor(name, species, food) {
    this.name = name
    this.species = species
    this.food = food
  }

  eat() {
    return this.name + ' is a ' + this.species + ' and likes to eat ' + this.food;
  }
}

//Code Here

var animal1 = new Animal("Haley", "human", "all the candy");
//var Animal1 = new Animal(Haley, human, all the candy);


////////// PROBLEM 3 //////////

/*
  Use the bind method to assign context of the "this" keyword in the sayHi function to the user object; and save the bound function to a variable named whoSaysHi.  
*/

function sayHi(greeting) {
  return this.name + ' says ' + greeting
}

let who = {
  name: 'Scuba Steve',
  age: 35,
  location: 'Belize'
}

//Code Here
var whoSaysHi = sayHi.bind(who);
//var whoSaysHi = sayHi.bind(who.name);
//var whoSaysHi = sayHi.bind(user);
//var whoSaysHi = sayHi.bind(user.username);

////////// PROBLEM 4 //////////

/*
  here we have a function that just returns the "this" keyword.  We will give context to "this", and your job is to tell us what the context is.
*/

function whatIsThis() {
  return this
}

// uncomment the line below and tell us what the context of "this" is for whatIsThis()
//let context1 = global
//let context1 = undefined
let context1 = window



let product = {
  name: 'snake plant',
  price: 45.32,
  description: 'Beautiful plant that can help filter the air inside your house.'
}

let func = whatIsThis.bind(product)

// uncomment the line below and tell us what the context of "this" is when we invoke func
//let context2 = undefined
//let context2 = "undefined"
//let context2 = '[Function: bound whatIsThis]'
//let context2 = 'Function: bound whatIsThis'
//let context2 = 'whatIsThis'
//let context2 = window
let context2 = product




let vacation = {
  location: 'Hawaii',
  price: 3000,
  days: 7,
  nights: 6,
  whatIsThis: whatIsThis
}

// uncomment the line below and tell us what the context of "this" is when we invoke vacation.whatIsThis


//let context3 = whatIsThis
//let context3 = ReferenceError: whatIsThis is not defined
//let context3 = undefined
//let context3 = window
//let context3 = 'whatIsThis is not defined'
//let context3 = 'ReferenceError: whatIsThis is not defined'
//let context3 = true
//let context3 = 'whatIsThis is not defined'
//let context3 = ReferenceError
// ------------------finally realized it relates to the above question -----------------------------
//let context3 = product
//let context3 = "Function: whatIsThis"
//let context3 = vacation.window
//let context3 = func
//let context3 = vacation.undefined
//let context3 = '[Function: whatIsThis]'
//let context3 = "{ location: 'Hawaii', price: 3000, days: 7, nights: 6, whatIsThis: [Function: whatIsThis] }"
let context3 = vacation



class Family {
  constructor(numParents, numKids, numPets) {
    this.numParents = numPets;
    this.numKids = numKids;
    this.numPets = numPets;
  }

  whatIsThis() {
    return this
  }
}

let family1 = new Family(2, 4, 1)

// uncomment the line below and tell us what the context of "this" is for the instance of Family created above.
let context4 = family1
//let context4 = 
//let context4 = 
//let context4 = 
//let context4 = 
//let context4 = 
//let context4 = 
//let context4 = 
//let context4 = 
//let context4 = 
//let context4 = 