var myClothes = {
  hat: "Fedora",
  shirt: "Nike",
  shoes: "Converse",
};

function myFunction(myObj) {
  var hatValue = myObj.hat;
  var shirtValue = myObj.shirt;
  var shoesValue = myObj.hat;
  return {
    hatValue,
    shirtValue,
    shoesValue,
  };
}

console.log(myFunction(myClothes));

module.exports = myFunction(myClothes);
