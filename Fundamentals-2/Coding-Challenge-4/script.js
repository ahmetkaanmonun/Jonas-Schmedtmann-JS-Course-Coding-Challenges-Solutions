"use strict"

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = bill => 300>bill>50 ? bill*0.15 : bill*0.20;


for (let i = 0; i< bills.length; i++) {
  
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}

for(let i=0;i<totals.length;i++){

    console.log(totals[i]);


}

function calcAverage(arr){
    let sum=0;
    for(let i = 0 ;i<arr.length;i++){

        sum += arr[i];

        
        
    }

    return `Average : ${sum/arr.length}`;
    

}

const average = calcAverage(totals);

console.log(average);


