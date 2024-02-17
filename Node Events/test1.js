let testObj = {
  name: "Ratna",
  age: 18,
  greet: function () {
    console.log(`good morning buddy ${this.name}`);
  },
};

testObj.greet();

testObj.greet.call({ name: "Dharmendra" });
