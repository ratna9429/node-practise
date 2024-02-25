// Write a JavaScript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties). For example, objA and objB are equal (but not equal to objC).

const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, d: 1 };
const objC = { a: 1, b: 1, d: 1 };

//This is giving answer correct. But this approach is very wrong. Only bad developer will do this.
const compareObjects = (objA, objB) => {
  for (let i = 0; i < Object.keys(objA).length; i++) {
    for (let j = 0; j < Object.keys(objB).length; j++, i++) {
      if (Object.keys(objA)[i] !== Object.keys(objB)[j]) {
        return false;
      }
    }

    return true;
  }
};

console.log("result 1 ==>", compareObjects(objA, objB));
console.log("result 2 ==>", compareObjects(objA, objC));
console.log("result 3 ==>", compareObjects(objB, objC));

//Correct approach

const compareObjects1 = (obj1, obj2) => {
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
  }

  return true;
};

console.log("result 1 ==>", compareObjects1(objA, objB));
console.log("result 2 ==>", compareObjects1(objA, objC));
console.log("result 3 ==>", compareObjects1(objB, objC));

// Another approach by Inbuilt method of Javascript
const compareObjects2 = (obj1, obj2) => {
  return Object.keys(obj1).every((key) => obj2[key]);
};

console.log("result 1 ==>", compareObjects2(objA, objB));
console.log("result 2 ==>", compareObjects2(objA, objC));
console.log("result 3 ==>", compareObjects2(objB, objC));
