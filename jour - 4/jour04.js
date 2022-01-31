//  Exercice 1 Object

// let cat = {
//     name:"garfield",
//     age : 5,
//     isCute : true,
// };
// console.log(cat.age);

// if(cat.isCute===true){
//     console.log("So cute");
// }


//   Exercice 2 combine 

// let cat = {
//         name:"garfield",
//         ages : 5,
//         isCute : true,
//     };

// let cat2 = {
//     name : "bijou",
//     age : 23,
//     isCute : false,
// };

// let cats = [cat, cat2]
// //  console.log(cats);
    // console.log(cats[0].age);
    // console.log(cats[1].isCute)





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

//  function compare(num1,num2){
//      if(num1>num2){
//          console.log(num1 +" "+ "is bigger");
//      }
//      else if( num2>num1)
//      console.log(num2 + "is bigger");
//      }
//      console.log("both are the same ");

//  compare(12,12);

// Exerice 5 Add Up 


// function addUp(num){
//     let i = 0
//     let total =0;

//     for ( i = 0 ; i <= num; i++ ) {
//             total = total + i
//         }
//         console.log(total)
// }

// addUp(12);

//Exercice 6 - Time 

function format(num) {
    h = Math.floor(num/ 3600);
    m = Math.floor(num% 3600 / 60);
    s = Math.floor(num % 3600 % 60);

        console.log(h,m,s);

}
format(3700);

