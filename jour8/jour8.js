
// const request = require("request");

// let getCountries = [];

// request.get("https://restcountries.com/v3.1/all", function (err, res, body) {
//     // console.log(err);
//     // console.log(res.statusCode);
//     // console.log(body);

//     let country = JSON.parse(body);
// //     console.log(country);

// //    let getCountries = country[2].name.common
// //    console.log(getCountries);

//    for(i=0  ; i < country.length ; i++){
//     //    console.log(country[i].name.common);
//         getCountries.push(country[i].name.common)

//    }
//    console.log(getCountries);

// });

// Exercice 2 Chuck Norris 

var request = require("request");

request.get("https://api.chucknorris.io/jokes/random", function  (err, res, body) {
    // console.log(err);
    // console.log(res.statusCode);
    console.log(body);

    let getJoke = JSON.parse(body);
    console.log(getJoke);

    let joke = getJoke.value;
    console.log(joke);
});