// Age

let birthYear = 2003 ;
let currentYear = 2024 ;
let age = currentYear - birthYear ;
console.log(age,"Years") 

//Area of rectangle

let length = 4 ;
let width = 5 ;
let areaOfRectangle = length * width ;
console.log(areaOfRectangle,"m^2")

//Area of circle

let radius = 4 ;
let areaOfCircle = 3.14*radius*radius;
console.log(areaOfCircle,"m^2")

//Area of cube

var lengthOfCubeSide = 5 ;
var areaOfCube = 6*lengthOfCubeSide*lengthOfCubeSide ;
console.log(areaOfCube,"m^2")

//Temperature conversion

let Fahrenheit = 40 ;
let Celsius = 35 ; 
let temperatureInCelsius = 5/9 * (Fahrenheit-32) ;
let temperatureInFahrenheit = 9/5 * Celsius + 32 ;
console.log(temperatureInCelsius,"C");
console.log(temperatureInFahrenheit,"F");


//Seconds into minutes and minutes into seconds

let minutes = 30 ;
let seconds = 600 ;
let minutesIntoSeconds = minutes * 60 ;
let secondsIntoMinutes = seconds/60 ;
console.log(minutesIntoSeconds,"seconds") ;
console.log(secondsIntoMinutes,"minutes") ;

//Percentage

var partOfAmount = 400 ;
var wholeAmount = 500  ;
var percentage = partOfAmount/wholeAmount  * 100 ;
console.log(percentage,"%");


//Days into weeks

let days = 17 ;
let weeks = Math.floor(days/7);
let remainingDays = days%7;
console.log(weeks,"weeks and ",remainingDays,"days");

//Increment and Decrement operator

var a = 2 ;
var b = ++a * 2 ;
console.log(b);


var x = 5 ;
var y = x-- + 2 ;
console.log(y);


let w = 3 ;
let z = ++w + w++ + ++w;
console.log(z)

let m = 2;
let n = ++m * m++ * --m;
console.log(n);


let c = 3;
let d = 5;
let result = ++c + d-- - c++ + --d;
console.log(result);


let i = 2;
let j = 4;
let k = i++ + ++j - --i + j--;
console.log(k);


let e = 5;
let f = 3;
let g = 2;
let h = 7;

let finalResult = ++e * (f-- + g) / --h;
console.log(finalResult) ;



let p = 2;
let q = 3;
let r = 4;
let finalOutput = p++ * (--q + p) / (r-- - q);
console.log(finalOutput);







