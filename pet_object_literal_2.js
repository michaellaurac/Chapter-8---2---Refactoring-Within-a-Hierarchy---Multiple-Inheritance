const barky = {
  bark () { console.log("woof woof"); }
};

const bitey = {
  bark () { console.log("grrr"); },
  bite () { console.log("real bite"); }
};

const animal = {
  beFluffy () { console.log("fluffy"); },
  bite () { console.log("normal bite"); }
};

const myPet = Object.assign({}, animal, barky, bitey);
myPet.beFluffy();
myPet.bark();
myPet.bite();

console.log(myPet);
console.log(Object.getPrototypeOf(myPet));

animal.beFluffy = function () { console.log("not fluffy"); };
myPet.beFluffy();
animal.hasBankAccount = false;
console.log(myPet.hasBankAccount);
bitey.bite = function () {
  console.log("don't bite");
};
myPet.bite();
myPet.bark();
