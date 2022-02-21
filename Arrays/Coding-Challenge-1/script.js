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

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
