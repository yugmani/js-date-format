// ***************************
// Everything You Need to Know About Date in JavaScript
// ******************************

// ******* TIMEZONES *********

// 1. Refers to the timezone your computer is in.
// 2. UTC is synonymous with Greenwich Mean Time(GMT) in practice

// By default, almost every date method in JavaScript (except one) gives you a date/time in local time.
// You only get UTC if you specify UTC.

// ******* Creating a date ********

// You can create a date with new Date().

// Four possible ways to use new Date()
// a. with a date-string
let d1 = new Date('1988 - 03 - 21');
console.log(d1); // Invalid Date
let d2 = new Date('21-03-1988');
console.log(d2); // Invalid Date
// Why ?
// In JavaScript, if you want to use a date string, you need to use a format that’s accepted worldwide.
// One of these formats is the `ISO 8601 Extended format`.
// ISO 8601 Extended format
// `YYYY-MM-DDTHH:mm:ss.sssZ`

// Z: If Z is present, date will be set to UTC. If Z is not present, it’ll be Local Time. (This only applies if time is provided.)

let d3 = new Date('1988-06-11');
console.log(d3); // Fri Jun 10 1988 17:00:00 GMT-0700 (Pacific Daylight Time)

// Why Jun 10??
// If you live in an area that’s behind GMT, you’ll get a date that says 10th June.

// If you live in an area that’s ahead of GMT, you’ll get a date that says 11th June.

// This happens because the date-string method has a peculiar behavior: If you create a date (without specifying time), you get a date set in UTC.

// If you want to create a date in Local Time with the date-string method, you need to include the time.
// When you include time, you need to write the HH and mm at a minimum (or Google Chrome returns an invalid date).
let d4 = new Date('1988-06-11T00:00');
console.log(d4); // Sat Jun 11 1988 00:00:00 GMT-0700 (Pacific Daylight Time)

// The whole Local Time vs. UTC thing with date-strings can be a possible source of error that’s hard to catch.

// It is recommended that don’t create dates with date strings.

// b. with date arguments
// c. with a timestamp
// d. with no arguments
