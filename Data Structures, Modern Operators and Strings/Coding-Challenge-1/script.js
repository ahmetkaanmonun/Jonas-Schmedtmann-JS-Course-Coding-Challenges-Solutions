"use strict";

// Working with strings

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

const convertToCamelCase = (str) => {
  // 1-Find underscore in the string and split it
  const arr = str.trim().split("_");
  // 2-Create arr to store firstWord and secondWord
  const [firstWord, secondWord] = arr;
  // 3-Concatenate firstWord and secondWord
  const firstString = firstWord.split("");
  firstString[0] = firstString[0].toLowerCase();
  firstString.join("");

  // 4-Convert secondWords first letter to uppercase
  let secondString = secondWord.split("");
  let [secondStringFirstLetter, ...rest] = secondWord;
  let firstLetter = secondStringFirstLetter.toUpperCase();
  let secondStringRest = rest.join("");
  let second = secondStringRest.toLowerCase();
  secondString = firstLetter + second;
  // 5-Join firstWord and secondWord
  const words = [firstString.join(""), secondString];
  // 6-Print camelCase word
  console.log(...words.join(""));
};

convertToCamelCase("delayed_departure");
