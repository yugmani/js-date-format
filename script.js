// ***********************************
// How to Format Dates in JS
// ***********************************

// The most used method to get the date in JavaScript is the new Date() object.

// By default, when you run new Date() in your terminal, it uses your browser's time zone and displays the date as a full text string, like Wed Jul 07 2021 19:12:32 GMT-0700 (Pacific Daylight Time).

let newdate = new Date();
// console.log(newdate);
// Wed Jul 07 2021 19:12:32 GMT-0700 (Pacific Daylight Time)

// formatting date;
let today = new Date().toLocaleDateString('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});

// console.log(today); // Wednesday, Jul 7, 2021

// **************************************
// Date Methods in JavaScript
// **************************************

// getFullYear() – gets the year as a four digit number (yyyy)

let year = new Date().getFullYear();
// console.log(year); // 2021

// getMonth() – gets the month as a number (0-11)
let month = new Date().getMonth();
// console.log(month); // 0-11 => 6 for July
// console.log(month + 1); // 1-12 => 7 for July

// Alternatively
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let currentMonth = months[new Date().getMonth()];
// console.log('Current Month: ' + currentMonth);
// Current Month: July

// getDate() – gets the day as a number (1-31)
let date = new Date().getDate();
// console.log(date); // 8 => current date July 8th

// getHours() – gets the hour (0-23)
let hours = new Date().getHours();
// console.log(hours); // 19 => current hour: 7pm

let minutes = new Date().getMinutes();
// console.log(minutes); // 23

let seconds = new Date().getSeconds();
// console.log(seconds); //28
