class Barky {
  bark () { console.log("woof woof"); };
};

class Bitey {
  bark () { console.log("grrr"); };
  bite () { console.log("real bite"); };
};

class Animal {
  beFluffy () { console.log("fluffy"); };
  bite () { console.log("normal bite"); };
};

// this is not possible
class Dog extends (Animal, Barky, Bitey) {};
const dog = new Dog();
dog.bite();
dog.beFluffy(); // this won"t work
