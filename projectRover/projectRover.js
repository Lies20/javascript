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
// console.log(rover)

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
    // console.log(rover)
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
    // console.log(rover)
}

const moveForward = (rover) => {
    console.log("moveForward was called")
    console.log("test", rover)
    if (rover.direction === "E") {
        rover.x = rover.x + 1
    } else if (rover.direction === "S") {
        rover.y = rover.y + 1
    } else if (rover.direction === "W") {
        rover.x = rover.x - 1    
    } else  if(rover.direction === "N") {
       rover.x = rover.y - 1;
    }
}
    // moveForward(rover)

turnRight(rover);
turnRight(rover);
moveForward(rover);
moveForward(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
moveForward(rover);
moveForward(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
moveForward(rover);
// moveForward(rover);
turnLeft(rover);
moveForward(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);


// turnRight(rover);
// moveForward(rover);

// ;


// const pilotRover = (str) => {
//     let strBis = str.split('')
//     // console.log(strBis);
//     for (i = 0; i < strBis.length; i++)
//         //  console.log("res",i)
//         console.log(strBis[i])
//     if (strBis[i] === "l") {
//         turnLeft(rover);
//     } else if (strBis[i] === "r"){
//         turnRight(rover);
//     } else if (strBis[i] === "f")
//         moveForward(rover);
//     }


//     pilotRover("lllffffff");


