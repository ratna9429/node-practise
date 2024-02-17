class Car {
  constructor(model, color, year, owner) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
  }

  wheelNumber() {
    return 4;
  }
}
bmwCar = new Car("bmw", "red", 1994, {});

console.log("bmwCar ===>", bmwCar);

class LuxaryCar extends Car {
  constructor(model) {
    super(model);
  }

  isLuxary() {
    return true;
  }
}

const lc = new LuxaryCar("BMW");

console.log("lc ====>", lc);
