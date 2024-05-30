// console.log("hello world");
// console.log("I am asmita, I say hello to debugger in VS code");
/* ----------- */

// let arr = new Array(10).fill(0).map((_, i) => i);
// console.log(arr);
/* ----------- */

// let square = function (num) {
//   return num * num;
// };
// console.log(square(15));
/* ----------- */

// let message = (function () {
//   let name = "asmita";
//   return name;
// })();
// console.log(message);
/* ----------- */

// let square = (num) => num * num;
// console.log(square(30));
/* ----------- */

// function* idGenerator() {
//   let id = 1;
//   while (true) {
//     yield id++;
//   }
// }
// const gen = idGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
/* ----------- */

// function resolveIn2Sec() {
//   return new Promise((resolved) => {
//     setTimeout(() => {
//       resolved("resolved");
//     }, 2000);
//   });
// }
// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveIn2Sec();
//   console.log(result);
//   // Expected output: "resolved"
// }
// asyncCall();
/* ----------- */

// let obj = {
//   prop1: 1,
//   fun: function () {
//     console.log(this);
//   },
// };
// console.log(this);
// console.log(obj.fun());
/* ----------- */

//execution order of callback function
// function firstTask(callback) {
//   setTimeout(() => {
//     console.log("First task completed");
//     callback();
//   }, 1000);
// }
// function secondTask(callback) {
//   setTimeout(() => {
//     console.log("Second task completed");
//     callback();
//   }, 1000);
// }
// function firstTask(cb) {
//   console.log("first");
//   cb();
// }
// function secondTask(cb) {
//   console.log("second");
//   cb();
// }
// firstTask(() => {
//   secondTask(() => {
//     firstTask(() => {
//       secondTask(() => {
//         console.log("All tasks completed");
//       });
//     });
//   });
// });
/* ----------- */

// in browser console, output is window object for both.
// output is empty object,in node this points to the current module.
// You are not exporting anything from yours, so it prints an empty object.
// console.log(this);
// // output is global object
// function fun() {
//   console.log(this);
// }
// fun();
/* ----------- */

// returns method function body
// const obj = {
//   method: function () {
//     console.log(this);
//   },
// };
// console.log(obj.method);
/* ----------- */

// Higher order function
// function A() {
//   console.log("inside a");
// }
// function B() {
//   console.log("inside b");
// }
// // console.log(A(B()));
// console.log(B(A()));
/* ----------- */

// Callback function example
// function sum(numbers, callback) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += callback(numbers[i]);
//   }
//   return total;
// }
// function Square(num) {
//   return num * num;
// }
// const numbers = [1, 2, 3, 4];
// console.log(sum(numbers, Square));
/* ----------- */

// settimeout runs after loop completion,
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// sol: using immediately invoked function
// for (var i = 0; i < 3; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

// sol: using bind method, bind captures the current value of i
// for (var i = 0; i < 3; i++) {
//   setTimeout(console.log.bind(console, i), 1000);
// }
/* ----------- */

// use strict

// "use strict";
// // result is {}
// console.log(this);
// // result is undefined, safe mode does not allow 'this' to go outside of function
// function fn() {
//   console.log(this);
// }
// fn();
/* ----------- */

// higher order function accepting another higher order function
// function sum(numbers, callback) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     let cb = callback(numbers[i]);
//     total += cb(i + 1);
//   }
//   return total; // 55
// }

// function sum(numbers, cb) {
//   let result = [];
//   for (i = 0; i < numbers.length; i++) {
//     let cbf = cb(numbers[i]);
//     result.push(cbf(i + 1));
//   }
//   return result; // [1, 4, 9, 16, 25]
// }

// function square(num) {
//   return function (i) {
//     return num * i;
//   };
// }
// const num = [1, 2, 3, 4, 5];
// console.log(sum(num, square));
/* ----------- */

// output Hello, Asmita. call method
// function greet(greeting, punctuation) {
//   console.log(greeting + ", " + this.name + punctuation);
// }
// const person = { name: "Asmita" };
// greet.call(person, "Hello", "!");
/* ----------- */

//bind method main borrows from free
// const free = {
//   fun: function () {
//     return this.name;
//   },
// };
// const main = { name: "Asmita" };
// let greet = free.fun.bind(main);
// console.log(greet());
/* ----------- */

// find common elements in two arrays

// function commonEle(arr1, arr2) {
//   let arr3 = [];
//   arr1.forEach((element) => {
//     if (arr2.includes(element)) {
//       arr3.push(element);
//     }
//   });
//   return arr3;
// }
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [2, 4, 6];
// console.log(commonEle(arr1, arr2));
/* ----------- */

// Create a function "map" that takes an array and a callback and
// returns a new array where the callbacks is applied to each elements

// function Map(arr, callback) {
//   let array = [];
//   for (let i of arr) {
//     array.push(callback(i));
//   }
//   return array;
// }
// function callback(ele) {
//   return ele + 1;
// }
// let arr = [1, 2, 3];
// console.log(Map(arr, callback));
/* ----------- */

// Create a function compose that takes two functions and returns a
// new function that is the composition of the two

// function compose(fun1, fun2) {
//   return function (x) {
//     return fun1(fun2(x));
//   };
// }
// function fun1(x) {
//   return x + 1;
// }
// function fun2(x) {
//   return x * 2;
// }

// let composite = compose(fun1, fun2);
// let final = composite(3);
// console.log(final);
/* ----------- */

// Debouncing
// function fun() {
//   console.log("This is a function");
// }

// function debounce(fun, delay) {
//   let timeout = null;
//   return () => {
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       fun();
//     }, delay);
//   };
// }
// const debouncedFun1 = debounce(fun, 100);
// debouncedFun1();
// const debouncedFun = debounce(fun, 100);
// debouncedFun();
// debouncedFun1();
/* ----------- */

// throttling
// function fun() {
//   console.log("this is a function");
// }
// function throttle(fun, delay) {
//   let timeout = null;
//   return () => {
//     if (!timeout) {
//       fun();
//       timeout = setTimeout(() => {
//         timeout = null;
//       }, delay);
//     }
//   };
// }

// let throttledFn1 = throttle(fun, 500);
// throttledFn1();
// let throttledFn2 = throttle(fun, 100);
// throttledFn2();
// throttledFn2();
/* ----------- */

// Partial application
// function partial(fun, ...args) {
//   return function (...moreArgs) {
//     return fun(...args, ...moreArgs);
//   };
// }
// function add(x, y, z) {
//   console.log(x + y + z);
// }
// let half = partial(add, 1, 2);
// half(3);
/* ----------- */

// closure
// let something = (function () {
//   var executed = false;
//   return function () {
//     if (!executed) {
//       executed = true;
//       console.log("do something");
//     }
//   };
// })();

// something(); // "do something"
// something(); // nothing happens
/* ----------- */

// function calledOnce() {
//   let firstTime = false;
//   return function () {
//     if (!firstTime) {
//       console.log("called once");
//       firstTime = true;
//     } else {
//       console.log("already called once");
//     }
//   };
// }
// let calling = calledOnce();
// calling();
// calling();
/* ----------- */
