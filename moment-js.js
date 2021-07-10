// **************************************
// JavaScript - How to Format Date in JavaScript
// *************************************

// ********* MOMENT.JS ***************
// ***********************************

// Moment.js CDN link
// <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

let now = new Date();

// simple date string format
let dateString = moment(now).format('YYYY-MM-DD');
// console.log(dateString); // 2021-07-09

// date string with date and time
let fullDateString = moment(now).format('YYYY-MM-DD HH:MM:SS');
// console.log(fullDateString); // 2021-07-09 11:07:65

// basic format
let basicDate = moment();
// console.log(basicDate); // Object=> Fri Jul 09 2021 11:08:02 GMT-0700 (Pacific Daylight Time), …}

// UTC format
let basicUTC = moment.utc().format();
// console.log(basicUTC); // 2021-07-09T18:09:47Z

// formatting a day
let dayFormat = moment().format('dddd');
// console.log(dayFormat); // Friday

// how many years ago?
let yearsAgo = moment('19710830', 'YYYYMMDD').fromNow();
// console.log(yearsAgo); // 50 years ago

// Local time
let currentLocalTime = moment().format('LTS');
// console.log(currentLocalTime); // 11:14:07 AM
