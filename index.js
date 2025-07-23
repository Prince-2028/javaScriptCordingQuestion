/*
============================================================
JavaScript Interview Questions & Concepts
============================================================
This file contains a collection of JavaScript code snippets and questions
commonly asked in interviews or useful for deepening your understanding
of JavaScript fundamentals. Each section is grouped by topic, and each
question includes a brief explanation of the concept being tested.
Uncomment any block to run and observe the output/behavior.
============================================================
*/

// ================= HOISTING & TEMPORAL DEAD ZONE =================

// Q1: What is the output? (var, let, const hoisting)
// console.log(x); // undefined (var is hoisted)
// console.log(y); // ReferenceError (let is not initialized)
// console.log(z); // ReferenceError (const is not initialized)
// var x = 6;
// let y = 5;
// const z = 4;

// Q2: Function hoisting
// sayHi(); // Works due to function hoisting
// function sayHi () {
//     console.log("Hello");
// }

// ================= THIS KEYWORD & OBJECTS =================

// Q3: What does 'this' refer to in an object method?
// const name ={
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     fullName: function() {
//        return this;
//     }
// }
// console.log(name.fullName()); // 'this' refers to the object

// Q4: What does 'this' refer to in a regular function?
// function A(){
//     console.log(this);   // In non-strict mode: global object; in strict: undefined
// }
// A();

// Q5: 'this' inside an object method
// const abc={
//     name :"Prince",
//     age: 25,
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// abc.sayName(); // 'Prince'

// ================= FUNCTION EXPRESSIONS & DECLARATIONS =================

// Q6: Function expression hoisting
// greet(); // TypeError: greet is not a function
// var greet = function() {
//   console.log("Hello Prince!");
// };

// Q7: Arrow function hoisting
// person(); // ReferenceError: Cannot access 'person' before initialization
// const person=()=>{
//     console.log("Hello Prince!");
// }

// ================= SCOPE & SHADOWING =================

// Q8: Variable shadowing and hoisting
// var a = 10;
// function test() {
//   console.log(a); // undefined (due to hoisting of local var a)
//   var a = 20;
//   console.log(a); // 20
// }
// test();

// Q9: let vs var in function scope
// let a = 5;
// function test() {
//   console.log(a); // undefined (due to hoisting of local var a)
//   var a = 10;
// }
// test();

// Q10: Arrow function hoisting
// sayHello(); // ReferenceError
// const sayHello = () => {
//   console.log("Hello Prince!");
// };
// Output: ReferenceError: Cannot access 'sayHello' before initialization

// ================= TYPEOF & FUNCTION/VAR CONFLICTS =================

// Q11: typeof with function/var conflicts
// var greet = "Prince";
// {
//   function greet() {
//     console.log("Hello");
//   }
//   console.log(typeof greet); // function (in non-strict mode, may vary)
// }
// console.log(typeof fun); // undefined
// var fun = function () {
//   console.log("Hello Prince!");
// };

// Q12: typeof with undeclared variables
// var fun;
// console.log(fun); // undefined
// console.log(typeof b); // undefined
// console.log(typeof a); // undefined
// var b=23;
// let a =10;

// ================= FUNCTION SCOPE & HOISTING =================

// Q13: Function/var shadowing inside a function
// var greet = "Prince";
// function test() {
//   console.log(greet); // function expression, not the outer var
//   var greet = function() {
//     console.log("Hello!");
//   };
// }

// Q14: Function declaration and var in block scope
// function foo() {
//   console.log(x); // function x() {}
//   {
//     var x = 10;
//     function x() {}
//   }
// }
// foo();

// Q15: Function declaration vs function expression
// function greet() {
//   console.log("Hello from function declaration");
// }
// var greet = function () {
//   console.log("Hello from function expression");
// };
// greet(); // Output: Hello from function expression

// ================= OBJECT METHODS & THIS =================

// Q16: 'this' in object method
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.fullName()); // John Doe

// ================= CLOSURES =================

// Q17: Closure example
// function outer() {
//   let name = "Prince";
//   function inner() {
//     console.log("Hello " + name);
//   }
//   return inner;
// }
// let greet = outer();
// greet(); // Output: Hello Prince

// ================= PROMISES & ASYNC =================

// Q18: Basic Promise usage
// new Promise(function(resolve, reject) {
//   resolve("Success!");
// }).then(function(value) {
//   console.log(value); // "Success!"
// }).catch(function(error) {
//   console.log(error);
// }).finally(function() {
//   console.log("Promise completed");
// })

// Q19: setTimeout in Promise
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(function(){
//     console.log("Promise is resolved");
//   },2000)
// });
// promise1.then((res) => console.log(res)).catch((err) => console.log(err));

// ================= PRIMITIVES VS REFERENCES =================

// Q20: Primitive assignment
// let a =10;
// let b =a;
// b =7;
// console.log(a); // 10
// console.log(b); // 7

// Q21: Object reference assignment
// const obj ={
//     name: "Prince",
//     age: 25
// }
// const obj2 = obj; 
// obj.age =30;
// console.log(obj.age);  // 30
// console.log(obj2.age); // 30

// ================= ADDITIONAL QUESTIONS =================

// Q22: Array reference vs copy
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1); // [1,2,3,4]
// console.log(arr2); // [1,2,3,4]

// Q23: Closure in a loop (var vs let)
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log('var:', i); // 3, 3, 3
//   }, 100);
// }
// for (let j = 0; j < 3; j++) {
//   setTimeout(function() {
//     console.log('let:', j); // 0, 1, 2
//   }, 100);
// }

// Q24: setTimeout in a loop
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i); // 3, 3, 3
//   }, i * 1000);
// }

// Q25: Destructuring with default values
// const [a = 1, b = 2, c = 3] = [10];
// console.log(a, b, c); // 10 2 3

// Q26: Arrow function vs regular function and 'this'
// const obj = {
//   value: 42,
//   regular: function() { return this.value; },
//   arrow: () => this.value
// };
// console.log(obj.regular()); // 42
// console.log(obj.arrow());   // undefined (or window.value in non-strict mode)

// ================= LIVE CODE EXAMPLE =================

// Example: What is the output?
// function abc(){
//    console.log("Hello from abc");
// }
// let xyz=abc();
// console.log(xyz); // undefined, because abc does not return anything




// function outer(){
//   var a =10;
//   function inner(){
//     console.log(a);
//   }
//   return inner;
// }

// outer()();

// function outer(){ 
//   function inner(){
//     console.log(a);
//   }
//   var a =10;
//   return inner;
// }

// var close = outer(); // this will give you outer function
// close(); // this will give you inner function and equivalent





// function x(){
//    let a = 20;
//    function y(){
//       console.log(a);
//    }
//  return y 
// }
// let closure = x(); 
// console.log(closure); 
// closure(); 

// const obj = {
//     text: 'LOGGING',
//     list: ['1', '2', '3'],
//     log() {
//         this.list.forEach(function (item) {
//             console.log(this.text + item); // OUTPUT ????
//         });
//     },
// };
// obj.log()


// const data = [1, [2, [3, [4, [5]]]]]
// console.log(data.flat(Infinity))

// if (true) {
//   var foo = 1;
//   let bar = 2;
//   const baz = 3;
// }

// console.log(foo); // 1
// console.log(bar); // ReferenceError
// console.log(baz); // ReferenceError




