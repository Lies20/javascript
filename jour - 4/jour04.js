//  Exercice 1 Object

// let cat = {
//     name:"garfield",
//     age : 5,
//     isCute : true,
// };
// console.log(cat.age);

// if(cat.isCute===true){
//     console.log("true");
// }


//   Exercice 2 combine 

let cat = {
        name:"garfield",
        ages : 5,
        isCute : true,
    };
    
let cat2 = {
    name : "bijou",
    age : 23,
    isCute : false,
};

//   cat = cat.length

// let cats = [cat, cat2]
// //  console.log(cats);
// //  console.log( cats.values[1]);

//  for (i=2;i<cats.length;i++)
// {console.log(cats[i]); 
// }
 

    // Exercice 3 even
// function chekIfEven(num){
//     if(num%2===0){
//         console.log("ce nombre est pair")
//     }else{
//         console.log("ce nombre est impair")
//     }
// }
// chekIfEven(5);
 
// Exercice 4 compare

 function compare(num1,num2){
     if(num1>num2){
         console.log(num1 +" "+ "is bigger");
     }
     else if( num2>num1)
     console.log(num2 + "is bigger");
     }
     console.log("both are the same ");

 compare(12,12);