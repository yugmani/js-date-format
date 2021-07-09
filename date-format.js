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
// ***********************************

let d1 = new Date('1988 - 03 - 21');
// console.log(d1); // Invalid Date
let d2 = new Date('21-03-1988');
// console.log(d2); // Invalid Date
// Why ?
// In JavaScript, if you want to use a date string, you need to use a format that’s accepted worldwide.
// One of these formats is the `ISO 8601 Extended format`.
// ISO 8601 Extended format
// `YYYY-MM-DDTHH:mm:ss.sssZ`

// Z: If Z is present, date will be set to UTC. If Z is not present, it’ll be Local Time. (This only applies if time is provided.)

let d3 = new Date('1988-06-11');
// console.log(d3); // Fri Jun 10 1988 17:00:00 GMT-0700 (Pacific Daylight Time)

// Why Jun 10??
// If you live in an area that’s behind GMT, you’ll get a date that says 10th June.

// If you live in an area that’s ahead of GMT, you’ll get a date that says 11th June.

// This happens because the date-string method has a peculiar behavior: If you create a date (without specifying time), you get a date set in UTC.

// If you want to create a date in Local Time with the date-string method, you need to include the time.
// When you include time, you need to write the HH and mm at a minimum (or Google Chrome returns an invalid date).
let d4 = new Date('1988-06-11T00:00');
// console.log(d4); // Sat Jun 11 1988 00:00:00 GMT-0700 (Pacific Daylight Time)

// The whole Local Time vs. UTC thing with date-strings can be a possible source of error that’s hard to catch.

// It is recommended that don’t create dates with date strings.
// If you want to create dates, use arguments or timestamps.

// b. with date arguments
// ***********************************

// seven arguments to create a date/time.
// 1. Year: 4-digit year.
// 2. Month: Month of the year (0-11). Month is zero-indexed. Defaults to 0 if omitted.
// 3. Day: Day of the month (1-31). Defaults to 1 if omitted.
// 4. Hour: Hour of the day (0-23). Defaults to 0 if omitted.
// 5. Minutes: Minutes (0-59). Defaults to 0 if omitted.
// 7. Seconds: Seconds (0-59). Defaults to 0 if omitted.
// 8. Milliseconds: Milliseconds (0-999). Defaults to 0 if omitted.

// console.log(new Date(1988, 2, 21));
// Mon Mar 21 1988 00:00:00 GMT-0800 (Pacific Standard Time)

// console.log(new Date(2019, 11, 25, 8));
// Wed Dec 25 2019 08:00:00 GMT-0800 (Pacific Standard Time)

// console.log(new Date(2023, 10, 6, 2, 20));
// Mon Nov 06 2023 02:20:00 GMT-0800 (Pacific Standard Time)

// console.log(new Date(2019, 5, 11, 5, 23, 59));
// Tue Jun 11 2019 05:23:59 GMT-0700 (Pacific Daylight Time)

// Notice dates created with arguments are all in Local Time?

// If you ever need UTC, you create a date in UTC this way:

// console.log(new Date(Date.UTC(2019, 5, 11)));
// Mon Jun 10 2019 17:00:00 GMT-0700 (Pacific Daylight Time)

// c. with a timestamp
// d. with no arguments
