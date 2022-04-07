var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    myPets.push("Bird", "Fish");
    myPets.shift();
    myPets.unshift("Lion");
    myPets.pop();

    var firstPet = myPetsArray[0];
    var lastPet = myPetsArray[2];
    var myNewPets = myPets;

    console.log(typeof (myNewPets));
    console.log(firstPet, lastPet);

    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;