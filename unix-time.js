// **************************************
// JavaScript - How to Use Date.parse in JavaScript
// **************************************

// ********* Date.parse() **********
// **************************************


// The Date.parse() method can help while dealing with calculations including dates. 
// These calculations are far easier, more accurate, and written more logically when the underlying date is represented as a Number rather than a string.

// The Date.parse() method takes as an argument a string representing a date, and returns the number of milliseconds that have elapsed between January 1, 1970, 00:00:00 UTC and the date provided.
// If the string provided is invalid, or is not recognized as a date format for some reason, the Date.parse() method returns NaN.

// Syntax: Date.parse(dateString)
// dateString – A string representing a date in the ISO 8601 calendar date extended format. Note – different browsers may support other formats in addition to ISO 8601.

// The ISO 8601 date format is as follows: YYYY-MM-DDTHH:mm:ss.sssZ. The characters represent the following data:

// YYYY – the current year, in four digits (e.g. 2020)
// MM – the current month, with a leading 0 (e.g. 09, 11)
// DD – The current day of the month, with a leading 0 (e.g. 07, 17)
// T – the literal character T, which is used to mark the beginning of the timestamp
// HH – The current hour, in 24 hour format (e.g. 09, 13, 22)
// mm – The current minute of the hour, with a leading 0 where needed (e.g. 08, 54)
// ss.sss – The current seconds and milliseconds (e.g. 03.444, 24.536)
// Z – the literal character Z, which is used to mark the end of the timestamp

// At a minimum, the year is mandatory. If a value is not provided in the input string, it will be given its minimum value (i.e. the month will be January if no month is provided, the time will be midnight if no timestamp is provided). 
// If the value specified is invalid for any of the portions of the timestamp string (e.g. month is set to ‘00’), NaN is returned.

// Years can be passed in as four decimal digits (i.e. 2020) or 6 decimal digits with a + or – operator attached.

const unixZeroTime = Date.parse('1970');
console.log(unixZeroTime);  // Expected output: 0

const someDate = Date.parse('+002021-07-01T23:00:00.000');
console.log(someDate);  // 1625205600000 =>this value represents the number of milliseconds between that date and January 1st, 1970 00:00 AM UTC.


// According to MDN, it is not recommended to use Date.parse. Their reasoning provided is: ”… until ES5, parsing of strings was entirely implementation dependent. 
// There are still many differences in how different hosts parse date strings, therefore date strings should be manually parsed
