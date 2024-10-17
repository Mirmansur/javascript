"use strict"; //Qat'iy  rejim deyiladi

// alert("error");
// console.log(-8 / 0); //Infinite degani
// console.log("error" * 100); //NaN degani

//  String malumot turi
// const myName = "Mirmansur";
// console.log(myName);

//  Boolean
// const isMarried = true;
// console.log(isMarried);

//  Null
// console.log(isFinite);

//  Undefined
// let isUndefined;
// console.log(isUndefined);

//  Object

// const isObject = {
//   //key: value
//   name: "Mirmansur",
//   age: 30,
//   isMarried: true,
// };
// alert(isObject.age);

// //  Array          0           1   2
// const isArray = ["Mirmansur", 30, true, { name: "John", age: 25 }];

// alert(isArray);

// Confirm
// const person = confirm("Are you sure you want to");
// console.log(person);

// Prompt
// const person = prompt("Are you sure you want to confirm", "");
// console.log(person);

// const person = [];

// person[0] = prompt("What;s your favorite coler ? #1 ", "");
// person[1] = prompt("What;s your favorite coler ? #2 ", "");
// person[2] = prompt("What;s your favorite coler ? #3 ", "");
// console.log(person);

// Interpolatsiya
// const channel = prompt("What;s your favorite channel");
// console.log(`https://youtube.com/${channel}`);

// const user = "Mirmansur";
// const job = "JavaScript Developer";
// console.log(`User name is ${user}`, `he is ${job}`);

// incr and decr

// let incr = 10;
// let decr = 10;

// incr--;
// decr++;

// console.log(incr, decr);

// let numberOfSeries;

// function people() {
//   numberOfSeries = +prompt("Nechta serial kordingiz", "");
//   while (
//     numberOfSeries == "" ||
//     numberOfSeries == null ||
//     isNaN(numberOfSeries)
//   ) {
//     numberOfSeries = +prompt("Nechta serial kordingiz", "");
//   }
// }
// if (numberOfSeries > 15) {
//   console.log("Siz kino  korish boyicha chempiyon ekansiz");
// } else if (numberOfSeries > 15 && numberOfSeries < 10) {
//   console.log("Siz classic tomoshabin ekansiz");
// } else {
//   console.log("Kam serial  koribsiz");
// }

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   gender: [],
//   pravit: false,
// };
// const a = prompt("Oxirgi  korgan serialingiz"),
//   b = prompt("Nechi baxo beras"),
//   c = prompt("Oxirgi  korgan serialingiz"),
//   d = prompt("Nechi baxo beras");
// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

// const person = +prompt("How  old ar you?", "");

// if (person > 25) {
//   console.log("Horrors films");
// } else if (person > 18 && person < 25) {
//   console.log("Boyivik film");
// } else {
//   console.log("Gulfilmler");
// }
// person > 25 ? console.log("Horrors films") : console.log("Gulfilmler");

// const color = prompt("");

// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "green":
//     console.log("Goo");
//     break;
//   case "yellow":
//     console.log("Slowly");
//     break;
//   default:
//     console.log("Unknown color");
//     break;
// }
// // let num = 20;
// for (let i = 1; i <= 10; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 9) {
//     // break;  // bu if ichidigi sondan kengsn yoq qilib beradi
//     continue; //bu if ichidigi son yo qilib beradi
//   }
//   console.log(i);
// }
//
// console.log(NaN === NaN); //  NaN  NaN ga teg qilsa hardoim false chiqadi

//Function decloration haqida

// const person = cals(10, 5);
// console.log(person);

// function cals(a, b) {
//   return a + b;
// }

//Function Expression haqida

// const logger = function () {
//   console.log("Hello world");
// };

// logger();

// Arrow function haqida
////////////////////////////////
// const person = "Hello world";
// console.log(person.slice(6, 11));

const person = Object.freeze({
  name: "Fozil",
  age: 30,
});
console.log(person);
let num = 32;
console.log(num);
