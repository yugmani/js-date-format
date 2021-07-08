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
