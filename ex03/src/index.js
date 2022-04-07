var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = myPetsArray.push("Bird", "Fish");
    var firstPet = myPets.unshift("Bird");
    firstPet = myPets[0];
    var lastPet = myPets.push["Fish"];
    lastPet = myPets[4].lenght - 1;

    myNewPets = myPets.pop("Fish");
    myNewPets = myPets.shift("Bird");
    myPets[0] = "Lion";

    return myPets;
}

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;
