var myPet = {
  species: "micka",
  name: "cicka",
  legs: 4,
  friends: ["Naja", "Ceca"],
};

function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };
