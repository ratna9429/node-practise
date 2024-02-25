// Given a year, report if it is a leap year.

const checkLeapUYear = (year) => {
  return year % 4 === 0;
};

console.log("result ==>", checkLeapUYear(2000));
console.log("result ==>", checkLeapUYear(2001));
console.log("result ==>", checkLeapUYear(2004));
