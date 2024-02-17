const vehicle = {
  isLuxury: false,
  isFourWheeler: false,

  showInfo: function () {
    return `The vehicle ${this.name} is of ${this.color}. It is a luxury vehicle ? ${this.isLuxury}. Does it have 4 wheels ? ${this.isFourWheeler}`;
  },
};

const car = Object.create(vehicle, { mirrors: { value: 2 } });

console.log("car ====>", car);
