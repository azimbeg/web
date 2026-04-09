// primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Azim"
const score = 100 
const isLoggedIn = true
const outsideTemp = null
let userName;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 54655654651116n

// console.log(typeof bigNumber);



 //JavaScript is a dynamically typed language


// Reference or non primitive 
// Array, Objects, Functions 

const heros = ["Shaktiman", "naagraj", "doga"]

let myBio = {
  name :"Azim",
  age : 22,
  address : "Pune"
}

const myFunc = function() {
    console.log("Hello World");
}

myFunc()