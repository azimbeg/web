const name = "Azim"
const repoCount = 50

// console.log(name + repoCount + "Value"); 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hitesh') // string is object

// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('t'));

// Q1) Convert this string to uppercase: 

// let str = "hello world";
// console.log(str.toUpperCase());

//  let str = "hello world";
// let result = str.toUpperCase();
// console.log(result);

// Q2: Find length of string

// let str = "JavaScript";
// let result = str.length
// console.log(result);


// 👉 Check if string includes "React"

// let str = "I am learning React JS";
// let result = str.includes('React');
// console.log(result);

// 👉 Extract "world" from:

// let str = "hello world";
// let result = str.slice(5);
// console.log(result);

// 👉 Replace "JS" with "JavaScript"

// let str = "I love JS";
// let result = str.replace("JS","JavaScript")
// console.log(result);

// 👉 Q6: Remove extra spaces

// let str = "   hello world   ";
// let result = str.trim()
// console.log(result);

// 👉 Convert string to array:

// let str = "apple,banana,mango";
// let result = str.split(",")
// console.log(result);

// 👉 Reverse a string:

// let str = "hello";
// let result = str.split("").reverse().join("")
// console.log(result);

// split("") → converts string to array
// ["h","e","l","l","o"]
// reverse() → reverses array
// ["o","l","l","e","h"]
// join("") → converts back to string
// "olleh"

// 👉 Count how many times "a" appears:

// let str = "banana";
// let result = str.split("")
// console.log(result);

// 👉 Check if string is palindrome:

// let str = "madam";
// let result = str.split("").reverse().join("")
// console.log(str===result);

// 👉 Q11: Capitalize first letter of each word

// "hello world"
// 👉 "Hello World"

// let str = "hello world";
// let result = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// console.log(result);

// Q12: Find the longest word

let str = "I am learning JavaScript";
let result = str.split(" ")

for(let i = 0; i < result.length; i++){
  console.log(i);
  
}

// console.log(result);

