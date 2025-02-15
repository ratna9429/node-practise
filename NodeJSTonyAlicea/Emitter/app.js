const Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", () => {
  console.log("Ratnadeep Test place 111111");
});

emtr.on("greet", () => {
  console.log("A greeting occured.");
});

console.log("Hello buddy...");

emtr.emit("greet");
