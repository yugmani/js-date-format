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
let day = new Date().getDate();
// console.log(day); // 8 => current date July 8th

// getHours() – gets the hour (0-23)
let hours = new Date().getHours();
// console.log(hours); // 19 => current hour: 7pm

let minutes = new Date().getMinutes();
// console.log(minutes); // 23

let seconds = new Date().getSeconds();
// console.log(seconds); //28

// *********** toDateString() Method ********
// **********************************

// The JavaScript toDateString() method returns the date portion of a date object in the form of a string using the following format:

// 1. First three letters of the week day name
// 2. First three letters of the month name
// 3. Two digit day of the month, padded on the left a zero if necessary
// 4. Four digit year (at least), padded on the left with zeros if necessary

let date1 = new Date().toDateString();
// console.log(date1); // Thu Jul 08 2021

// One major downside to this method is our inability to manipulate the date output the way we want it.
// For example, it doesn’t give us the ability to show dates according to our language.

// ********* toLocaleDateString() Method *********
// **********************************************

// This method returns the date object as a string using local conventions.
// It also takes in options as arguments which lets you/your applications customize the behavior of the function.

// Syntax:
// toLocaleDateString()
// toLocaleDateString(locales)
// toLocaleDateString(locales, options)

const currentDate = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

// Without locales or options
console.log(currentDate.toLocaleDateString()); // 7/8/2021

// Without options
// Japanese
console.log(currentDate.toLocaleDateString('ja-JP')); // 2021/7/8

console.log(currentDate.toLocaleDateString('ja-JP', options)); // 2021年7月8日木曜日

console.log(currentDate.toLocaleDateString('de-DE', options)); // Donnerstag, 8. Juli 2021

// Arabic
console.log(currentDate.toLocaleDateString('ar-EG', options)); // الخميس، ٨ يوليو ٢٠٢١

// US English
console.log(currentDate.toLocaleDateString('en-US', options)); //Thursday, Jul 8, 2021
