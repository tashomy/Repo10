var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};

function myFunction(first, second) {
  lion[first] = second;
  return lion;
}

myFunction("roar", "roar-roar");

module.exports = myFunction;
