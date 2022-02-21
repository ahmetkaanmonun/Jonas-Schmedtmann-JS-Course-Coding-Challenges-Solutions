"use strict";

function checkDogs(dogsJulia, dogsKate) {
  let correctedJulia = dogsJulia.splice(1, 2);
  let arr = [...correctedJulia, ...dogsKate];

  arr.forEach((mov, i, arr) => {
    let type = arr[i] >= 3 ? "adult" : "puppy";

    console.log(
      "Dog " + (i + 1) + " is " + type + " and is " + arr[i] + " years old."
    );
  });
}

const calcAverageHumanAge = function (ages) {
  // Exclude all dogs less than 18
  // //   Calculate the dog age in human years using the following formula: if the dog is
  // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
  // humanAge = 16 + dogAge * 4
  // //   Calculate the average human age of all dogs
  const age = ages.map((dogAge) =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  const filterAge = age.filter((age) => age >= 18);
  const avg = filterAge.reduce((acc, curr) => acc + curr / filterAge.length, 0);

  return avg;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
