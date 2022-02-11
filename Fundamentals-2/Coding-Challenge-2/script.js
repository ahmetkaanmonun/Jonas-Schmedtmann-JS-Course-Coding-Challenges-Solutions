"use strict"

const calcTip = bill => 300 >= bill >= 50  ? bill*0.15 : bill*0.20;

const bills = [125,555,44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const total = [`Bill : ${bills[0]} Tip: ${calcTip(bills[0])}`,
               `Bill : ${bills[1]} Tip: ${calcTip(bills[1])}`,
               `Bill : ${bills[2]} Tip: ${calcTip(bills[2])}`];
                

console.log(total);