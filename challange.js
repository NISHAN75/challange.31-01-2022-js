// loop 
// let number = 100
// for(i = 0; i <= number;i++){
//     console.log(i);
// }
// let number =[50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
// for(i = 0 ;i < number.length; i++){
//     if(number[i] % 2 ==1){
//         console.log('this is odd number',number[i]);
//     }
//     else if( number[i] % 2 ==0){
//         console.log('this is jor number', number[i]);
//     }
// }
// threepluseNumber 

// function threePluseNumber(num1,num2,num3){
//     let total = num1+num2+num3;
//     return total;
// }
// console.log(threePluseNumber(9,13,59));

/*===================
Celsius to Fahrenheit
=====================

function celsiusToFaharnheit(celsius){
    let cheakFaharnheit = (celsius * (9 / 5)+32);
    return CheakFaharnheit;
}
console.log(celsiusToFaharnheit(7));
*/
/*===================
  Fahrenheit to  Celsius
=====================

function fahrenheitToCelsius(faharenheit){
    let cheakCelsius = ( (faharenheit -32)*(5 /9));
    return cheakCelsius;
}
console.log(fahrenheitToCelsius(8))
*/
/*===================
  Gard Count
=====================

function getGrad(marks){
    if(marks >=80){
        console.log('congress!! you got A+');
    }
    else if (marks >=70){
        console.log('congress!! you got A');
    }
    else if (marks >=60){
        console.log('congress!! you got B+');
    }
    else if (marks >=50){
        console.log('congress!! you got C+');
    }
    else if (marks >=40){
        console.log('congress!! you got D+');
    }
    else if(marks>=30){
        console.log('congress!! you got pass')
    }
    else{
        console.log('opps!!! try next year.......');
    }
}
getGrad(199);
*/
// Simple Interest Calculator
function interestRate(principal,rate,year){
    getTotalMoney = (principal * rate * year) /100;
    return getTotalMoney;
}
console.log(interestRate(1000,10,5));