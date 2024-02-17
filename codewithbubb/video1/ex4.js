//Write a javascript program to get current date. e.g dd-mm-yyyy

function getTodayDate(date = new Date()) {
  console.log("date ===>", date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

console.log("result ===>", getTodayDate());
