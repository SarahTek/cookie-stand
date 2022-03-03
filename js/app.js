'use strict';
let workingHours = ['6 am','7 am','8 am','9 am','10 am,','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

let seattle = {
  name : 'Seattle',
  minCust: 23,
  maxCust: 65,
  guestEachHour: [],
  cookiesPerHourArray: [],
  totalDailyCookie: 0,
  avgCookie: 6.3,
  getRandomCustomersEachHour: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  avgHourlyCookie: function (){
    for (let i = 0; i < workingHours.length; i++){
      //this.cookiesPerHour[i] = math.random()
      let customer = this.getRandomCustomersEachHour();
      let cookiesSold = Math.floor(customer * this.avgCookie);
      this.cookiesPerHourArray.push(cookiesSold);
    }
  },
  function sum(totalCookies)
  //totalCookiesSold: function (avgHourlyCookie, workingHours){
    let totalHourlyCookies = 1;
    for (let i = 0; i < workingHours.length; i++){
      totalHourlyCookies = multiply(workingHours[1], totalHourlyCookies)[0];
    }
    let display = `The total cookies sold are ${this.totalCookiesSold}.`;
    console.log(totalHourlyCookies, display);

  }
};
console.log(seattle.getRandomCustomersEachHour());
console.log(seattle.cookiesPerHourArray);
seattle.avgHourlyCookie();
























//console.log(seattle.cookiesPerHourArray);


// let japan  = {
//   minCust: 23,
//   maxCust: 65,
//   guestEachHour: [],
//   cookiesPerHour: [],
//   totalDailyCookie: 0,
//   avgCookie: 6.3,
//   guestCustomersEachHour: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }
// };


// console.log(japan.getCustomerEachHour());



// let dubai  = {
//   minCust: 23,
//   maxCust: 65,
//   guestEachHour: [],
//   cookiesPerHour: [],
//   totalDailyCookie: 0,
//   avgCookie: 6.3,
//   guestCustomersEachHour: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }
// };


// console.log(dubai.getCustomerEachHour());



// let paris  = {
//   minCust: 23,
//   maxCust: 65,
//   guestEachHour: [],
//   cookiesPerHour: [],
//   totalDailyCookie: 0,
//   avgCookie: 6.3,
//   guestCustomersEachHour: function(){
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   }
// };


// console.log(paris.getCustomerEachHour());
