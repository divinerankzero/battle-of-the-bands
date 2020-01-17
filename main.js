/* 
[x] write a function that accepts any band name as an argument. 
[x] The function will increment a global variable by one each time it is invoked, 
[x] and return that number, and the band name concatenated together. 
*/

let bandNumber = 0;

const takeNumber = function (bandName) {
    bandNumber ++;
    return `${bandNumber}. ${bandName}`;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // [x] This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // [x] This should print "2. Underdogs" in the console