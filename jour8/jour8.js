
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

// var request = require("request");

// request.get("https://api.chucknorris.io/jokes/random", function  (err, res, body) {
//     // console.log(err);
//     // console.log(res.statusCode);
//     console.log(body);

//     let getJoke = JSON.parse(body);
//     console.log(getJoke);

//     let joke = getJoke.value;
//     console.log(joke);
// });


// Exercice 3 pokémon 

var request = require("request");

// let pokemonSite = "https://pokeapi.co/api/v2/pokemon/"

// request.get(pokemonSite, function (err, res, body) {
//     // console.log(err);
//     // console.log(res.statusCode);
//     // console.log(body);

//     let pokemon =JSON.parse(body)
//     console.log(pokemon);

//     let pokemonSite = pokemonSite + id
// });
let pokemonSite = "https://pokeapi.co/api/v2/pokemon/1"

function CatchPokemon (id){
     
   
    
    request.get(pokemonSite, function (err, res, body) {
        // console.log(err);
        // console.log(res.statusCode);
        // console.log(body);
    
        let pokemon =JSON.parse(body)
        // console.log(pokemon.name);
    
        pokemonSite = pokemonSite += id
        console.log('nom du pokemon:'+''+ pokemon.name)
    });
    
}
CatchPokemon(4);