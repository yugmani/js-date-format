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
// ************************************

// In JavaScript, a timestamp is the amount of milliseconds elapsed since 1 January 1970 (1 January 1970 is also known as Unix epoch time).
// You only use timestamps to compare between different dates

// console.log(new Date(1560211200000));
// Mon Jun 10 2019 17:00:00 GMT-0700 (Pacific Daylight Time)

// d. with no arguments
// ***********************************

// If you create a date without any arguments, you get a date set to the current time (in Local Time).

// console.log(new Date());
// Current Date and time: Thu Jul 08 2021 18:24:23 GMT-0700 (Pacific Daylight Time)

// ******* FORMATTING A DATE ********

// no easy way to format a date in JavaScript.
// The native Date object comes with seven formatting methods.
const dateFormat = new Date(2019, 0, 23, 17, 23, 42);

// console.log(dateFormat.toString());
// Wed Jan 23 2019 17:23:42 GMT-0800 (Pacific Standard Time)

// console.log(dateFormat.toDateString());
// Wed Jan 23 2019

// console.log(dateFormat.toLocaleString());
// 1/23/2019, 5:23:42 PM

// console.log(dateFormat.toLocaleDateString()); // 1/23/2019

// console.log(dateFormat.toGMTString());
// Thu, 24 Jan 2019 01:23:42 GMT

// console.log(dateFormat.toUTCString());
// Thu, 24 Jan 2019 01:23:42 GMT

// console.log(dateFormat.toISOString());
// 2019-01-24T01:23:42.000Z

// If you need a custom format, you need to create it yourself.

//  *************************************
// WRITING A CUSTOM DATE FORMATTING
// **************************************

// Four methods to get dates:
// i. getFullYear: Gets 4-digit year according to local time
// ii. getMonth: Gets month of the year (0-11) according to local time. Month is zero-indexed.
// iii. getDate: Gets day of the month (1-31) according to local time.
// iv. getDay: Gets day of the week (0-6) according to local time. Day of the week begins with Sunday (0) and ends with Saturday (6).

const myDate = new Date(2019, 0, 23);

const myYear = myDate.getFullYear(); // 2019
const myMonth = myDate.getMonth(); // 0
const myDates = myDate.getDate(); // 23
const myDay = myDate.getDay(); // 3

// It’s harder to get names of day and month.

// Since Month is zero-indexed, we can use an array instead of an object.

const allMonths = [
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

// To get January, you need to:

// a. Use getMonth to get the zero-indexed month from the date.
// b. Get the month name from months array.

const monthIndex = myDate.getMonth(); // 0
const monthName = allMonths[monthIndex];
// console.log(monthName); // January

// More condensed form:
const month_name = allMonths[myDate.getMonth()]; // January

// Similary to get day name
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayName = days[myDate.getDay()];
// console.log(dayName); // Wed

// Then, you combine all the variables you created to get the formatted string.

const formattedDate = `${dayName}, ${myDates},${monthName} ${myYear}`;
// console.log(formattedDate); // Wed, 23,January 2019

// ******* Custom Formatted Time *******

// 1. getHours: Gets hours (0-23) according to local time.
// 2. getMinutes: Gets minutes (0-59) according to local time.
// 3. getSeconds: Gets seconds (0-59) according to local time.
// 4. getMilliseconds: Gets milliseconds (0-999) according to local time.

// ************************************
// COMPARING DATES
// ************************************

const dateOne = new Date(2020, 10, 26);
const dateTwo = new Date(2010, 10, 26);
const dateThree = new Date(2010, 10, 26);

// to know whether a date comes before or after another date,
// console.log(dateOne > dateTwo); // true

// It’s more difficult if you want to check if two dates fall exactly at the same time. You can’t compared them with == or ===.

// console.log(dateTwo == dateThree); // false
// console.log(dateTwo === dateThree); // false

function compareYears(a, b) {
  if (a.getFullYear() === b.getFullYear()) {
    return true;
  }
  return false;
}

function compareMonths(a, b) {
  if (a.getMonth() === b.getMonth()) {
    return true;
  }
  return false;
}

function compareDates(a, b) {
  if (a.getDate() === b.getDate()) {
    return true;
  }
  return false;
}

const isExactlySame = (a, b) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate() &&
    a.getTime() === b.getTime()
  );
};

// console.log(compareYears(dateTwo, dateThree)); // true

// console.log(isExactlySame(dateTwo, dateThree)); // true
