// ince to feet



// function inchToFeet(inches){
//     var feet = inches /12;
//     return feet;
// }

// var MyInches = 132;
// var feet = inchToFeet(MyInches);
// console.log(feet);
// var takurDeInches = 144;
// var feet = inchToFeet(takurDeInches);
// console.log('this is takurDe',feet);
// var ridoy = 156;
// var feet = inchToFeet(ridoy);
// console.log('this is ridoy',feet);
// var shakib = 192;
// var feet = inchToFeet(shakib);
// console.log('this shakib' ,feet);
// maile to km
// function maileToKm(miles){
//     var km = miles *1.60934;
//     return km;
// }

// var rubel = 25;
// var km = maileToKm(rubel);
// console.log('rubel dor dica',km);
// oddd number ki na
// function myNumber(num){
//     if( num % 2 ==0){
//         return true
//     }
//     return false;
// }
// let oniNum =27;
// let result =myNumber(oniNum);
// console.log('this result',result);
// leep year 
// function cheackLeepYear(year){
//     findYear = ((year % 4 ==0 && year % 100 !=0) || year % 400 ==0);
//     if(findYear == true){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let thisYear = 2100;
// let toLeepYear =cheackLeepYear(thisYear);
// console.log(toLeepYear);
// let factorial =1;
// for(let i =1;i<=5;i++){
//     console.log(i);
//     factorial = factorial *i;
// }
// console.log(factorial);
function getFactorial(number){
    let factorial =1;
    for(i =1;i<=number;i++){
        factorial = factorial *i;
    }
    return factorial;
}

let firstFactorial = getFactorial(8);
console.log('this firstFactorial',firstFactorial);
let SecendFactorial = getFactorial(111);
console.log('this is secondFactorial',SecendFactorial);
// function getFactorial(number){
//     let factorial = 1;
//     for(let i= number; i<=number;i--){
//         factorial = number * i;
//     } 
//     return factorial;
// }
// let myFirstFactorial = getFactorial(7);
// console.log('this is myFirestFactorial',factorial);






