"use strict";

function printForecast(arr) {
  let total = [];
  for (let i = 0; i < arr.length; i++) {
    total.push(`${arr[i]}°C in ${i + 1} days`);
  }

  total.forEach((element) => {
    console.log(element);
  });
}

console.log(printForecast([12, 5, -5, 0, 4]));
