function Car(model, year, color, owner) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.owner = owner;
}

function Owner(name, age) {
  this.name = name;
  this.age = age;
}

let ratna = new Owner("Ratnadeep Maurya", 31);

let bmw = new Car("bmw", 1995, "red", ratna);

console.log("bmw 111 ==>", JSON.stringify(bmw));

Car.prototype.wheel = function () {
  return 4;
};

console.log("bmw 222 ==>", bmw.wheel());
