console.log("hello world");
var test ="My name is lies ";

console.log(test);

var name ="Lies";
console.log("nice to meet you" + " " + name );

var testLength ="I'm very long ";
console.log(testLength.length);

var food ="croissant is meh";
food = food.replace("meh" , " so good");
console.log(food);

var basic =" This Is Cool";
console.log(basic);

var basicUp = "basic";
basicUp = basicUp.toUpperCase();
console.log(basicUp);

var basicDown = "BASIC";
basicDown = basicDown.toLowerCase();
console.log(basicDown);

var word = "banana";
letters = word.split(""); 
console.log(letters);

var age = 25;
var template = ( `i'm  ${age} years old` );
console.log(template);
 
var change = "bonjour";
var re = /o/gi;
changed = change.replace(re ,'a');
console.log(changed);