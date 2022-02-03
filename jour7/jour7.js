// Exercice 1 file system

// var fs = require("fs");
// fs.readFile("jour07.txt", function (err,data) {
//     if (err) {
//         console.error(err);
//         return;

//     }
//     console.log("lecture en  différé :" + data.toString())
// });


//  Exercice 2 Map Double 

//  let array = [1,2,3,4,5];
//  var doubles = array.map(function(array) {
//     return array * 2;
//   });
//   console.log(doubles);


// Exercice 3 Map Names

// let longNames=[
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ]

// let shortNames = longNames.map(  function (person){
//     // console.log("affichage de person", person);
//     let finallyName = {
//         name : person.firstName + " " + person.lastName      
//     }
//     //  let array = [finallyName];

//     // console.log(finallyName);
//     return finallyName;

// })

// console.log(shortNames);

// Exercice 4 filter numbers 

//   let array = [ 1 , "toto",34,"javascript",8]

//   let numbers = array.filter(function(num){
//       if(typeof num === "number" )
//       return num
//   })
//   console.log(numbers);


// Exercice 5 filter even

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let even = numbers.filter(function (value) {
//     return value % 2 === 0
// })
// console.log(even)


// Exercice 6 Cake 

let cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]

var soldOut = cakes.filter(function (cake) {
    return cake.flavor === "chocolate"
})
soldOut = soldOut.map(function(cake){
       cake.status = 'is sold out '
    return cake

})


console.log(soldOut);