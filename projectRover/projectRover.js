var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = {
    direction: "N",
    x: 0,
    y: 0,
};
console.log(rover)

const direction = "N";


const turnLeft = (rover) => {
    if (rover.direction === "N") {
        rover.direction = "W"
    } else if (rover.direction === "W") {
        rover.direction = "S"
    } else if (rover.direction === "S") {
        rover.direction = "E"
    } else {
        rover.direction = "N"
    }
    console.log(rover)
}

const turnRight = (rover) => {
    if (rover.direction === "N") {
        rover.direction = "E"
    } else if (rover.direction === "E") {
        rover.direction = "S"
    } else if (rover.direction === "S") {
        rover.direction = "w"
    } else {
        rover.direction = "N"
    }
    console.log(rover)
}

const moveForward = (rover) => {
    console.log("moveForward was called")
    console.log("test", rover)
    if (rover.direction === "E") {
        console.log("turned right")
        rover.x = rover.x + 1
    } else if (rover.direction === "S") {
        console.log("wrong way")
        rover.y = rover.y - 1
    } else if (rover.direction === "W") {
        console.log("wrong way")
        rover.x = rover.x + 1
        
    } else {
        rover.y = rover.y - 1
    }
    console.log("search eror",rover)
}

turnRight(rover);
moveForward(rover);

let str = "lrf"
let letters = str.split('');


const pilotRover = (str) =>{
    for(i = 0 ; i < str.length ; i++)
             i ++

    if( i === "l"){
        turnLeft
        console.log("res",i)
    }
}

pilotRover(str);