// console.log(x);

//  console.log(y);
// console.log(z);

// var x = 6
// let y = 5;
// const z = 4;

// sayHi()
// function sayHi () {
//     console.log("Hello");
// }




// const name ={
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     fullName: function() {
//        return this;
//     }
// }
//  console.log(name.fullName());
// function A(){
//     console.log(this);   
// }
// A()



// const abc={
//     name :"Prince",
//     age: 25,
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// abc.sayName()

// greet()

// var greet = function() {
//   console.log("Hello Prince!");
// };


// person()
// const person=()=>{
//     console.log("Hello Prince!");
// }

// var a = 10;

// function test() {
//   console.log(a); undefine 
//  var a =20  20
//  console.log(a);
 
// }

// test();

// let a = 5;

// function test() {
//   console.log(a);
//   var a = 10;
// }

// test();--- undefined

// sayHello();

// const sayHello = () => {
//   console.log("Hello Prince!");
// };
//  output // refrenace error cannt acces 'sayHello' before initialization


// var greet = "Prince";

// {
//   function greet() {
//     console.log("Hello");
//   }

//   console.log(typeof greet);
// }
//   console.log(typeof fun); // 🔥 ?   undefine

// var fun = function () {
//   console.log("Hello Prince!");
// };



// var fun 
// console.log(fun);--- undefine 
// console.log(typeof b);
// console.log(typeof a); // 🔥 ? undefine


// var b=23
// let a =10

// var greet = "Prince";

// function test() {
//   console.log(greet);

//   var greet = function() {
//     console.log("Hello!");
//   };
// }

// function foo() {
//   console.log(x);
  
//   {
//     var x = 10;
//     function x() {}
//   }
// }

// foo();


// test();

// function greet() {
//   console.log("Hello from function declaration");
// }

// var greet = function () {
//   console.log("Hello from function expression");
// };

// greet();

//  const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.fullName()); 


function outer() {
  let name = "Prince";

  function inner() {
    console.log("Hello " + name);
  }
}

const greet = outer(); // outer() call hoke finish ho gaya
greet(); // 🔥 Still prints: Hello Prince
