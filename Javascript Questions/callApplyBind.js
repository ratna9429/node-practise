let person = {
  personName: "Rohan",
  age: 17,
};

function introduceYourSelf(hobby) {
  console.log(
    `Hi, my name is ${this.personName}. I am ${this.age} years old. My like playing ${hobby}`
  );
}

// introduceYourSelf.apply(person, ["Cricket"]);

let bindIntroduce = introduceYourSelf.bind(person);

bindIntroduce("Badminton");
