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



const abc={
    name :"Prince",
    age: 25,
    sayName: function() {
        console.log(this.name);
    }
}
abc.sayName()