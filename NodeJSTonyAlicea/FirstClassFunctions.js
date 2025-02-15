function myFunctionOne() {
  console.log("this One ==>", this);
  function myFunction() {
    console.log("this ==>", this);
  }
  myFunction();
}

myFunctionOne();

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function () {
  console.log(`Hello, ${this.firstname} + ${this.lastname}`);
};

var john = new Person("John", "Doe");

john.greet();

(function (lastname) {
  var firstname = "John";
  console.log(firstname);
  console.log(lastname);
})("Doe");
