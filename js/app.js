'use strict';


let hour = ['6 am','7 am','8 am','9 am','10 am,','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
function Store(name,minCus,maxCus,avg){
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avg = avg;
  this.dailyTotal= 0;
  this.custPerHour = [];
  this.cookiesSoldPerHour = [];
}

Store.prototype.getRandomCustomer = function(){
  for ( let i = 0; i < hour.length; i++){
    let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
    this.custPerHour.push(custNumberThisHour);
  }
};
Store.prototype.calcCookiesPerHour = function(){
  this.getRandomCustomer();
  for (let i = 0; i < hour.length; i++){
    let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
    this.dailyTotal += cookiesSold;
    this.cookiesSoldPerHour.push(cookiesSold);
  }
};
Store.prototype.render = function(){
  this.calcCookiesPerHour();
  let table = document.getElementById('table');
  let storeRow = document.createElement('tr');
  table.appendChild(storeRow);
  let storeName = document.createElement('td');
  storeName.textContent = this.name;
  storeRow.appendChild(storeName);

};

let storeArray = [
  new Store('Seattle',23,65,6.3),
  new Store('Tokyo',3,24,1.2),
  new Store('Dubai',11,38,3.7),
  new Store('Paris',23,65,6.3),
  new Store ('Lima',2,16,4.6),
];
for (let i = 0; i < storeArray.length; i++){
  let Store = storeArray[i];
  Store.render();
}
// function salesData(){
//   let column1 = document.createElement('th');
// blankCol.appendChild(salesData);
// }
// console.log(storeArray);

// let row = document.document.createElementById('tr');
//console.log(Seattle);

// let seattle = {
//   name: 'Seattle',
//   minCus: 23,
//   maxCus: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   getRandomCustomer: function(){
//     for ( let i = 0; i < hour.length; i++){
//       let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//       this.custPerHour.push(custNumberThisHour);
//     }
//   },


//   calcCookiesPerHour: function(){
//     this.getRandomCustomer();
//     for (let i = 0; i < hour.length; i++){
//       let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
//       this.dailyTotal += cookiesSold;
//       this.cookiesSoldPerHour.push(cookiesSold);
//     }
//   },


//   render(){
//     this.calcCookiesPerHour();
//     let cityList = document.getElementById('seattle');
//     for (let i = 0; i < hour.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//       cityList.appendChild(listItem);
//     }
//     let listItemTotal = document.createElement('li');
//     listItemTotal.textContent ='Total cookies: ' + this.dailyTotal;
//     cityList.appendChild(listItemTotal);
//   }

// };





// let tokyo = {
//   name: 'tokyo',
//   minCus: 3,
//   maxCus: 24,
//   avg: 1.2,
//   dailyTotal: 0,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   getRandomCustomer: function(){
//     for ( let i = 0; i < hour.length; i++){
//       let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//       this.custPerHour.push(custNumberThisHour);
//     }
//   },


//   calcCookiesPerHour: function(){
//     this.getRandomCustomer();
//     for (let i = 0; i < hour.length; i++){
//       let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
//       this.dailyTotal += cookiesSold;
//       this.cookiesSoldPerHour.push(cookiesSold);
//     }
//   },


//   render(){
//     this.calcCookiesPerHour();
//     let cityList = document.getElementById('tokyo');
//     for (let i = 0; i < hour.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//       cityList.appendChild(listItem);
//     }
//     let listItemTotal = document.createElement('li');
//     listItemTotal.textContent ='Total cookies: ' + this.dailyTotal;
//     cityList.appendChild(listItemTotal);
//   }

// };




// let dubai = {
//   name: 'dubai',
//   minCus: 11,
//   maxCus: 38,
//   avg: 3.7,
//   dailyTotal: 0,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   getRandomCustomer: function(){
//     for ( let i = 0; i < hour.length; i++){
//       let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//       this.custPerHour.push(custNumberThisHour);
//     }
//   },


//   calcCookiesPerHour: function(){
//     this.getRandomCustomer();
//     for (let i = 0; i < hour.length; i++){
//       let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
//       this.dailyTotal += cookiesSold;
//       this.cookiesSoldPerHour.push(cookiesSold);
//     }
//   },


//   render(){
//     this.calcCookiesPerHour();
//     let cityList = document.getElementById('dubai');
//     for (let i = 0; i < hour.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//       cityList.appendChild(listItem);
//     }
//     let listItemTotal = document.createElement('li');
//     listItemTotal.textContent ='Total cookies: ' + this.dailyTotal;
//     cityList.appendChild(listItemTotal);
//   }

// };








// let paris = {
//   name: 'paris',
//   minCus: 23,
//   maxCus: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   getRandomCustomer: function(){
//     for ( let i = 0; i < hour.length; i++){
//       let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//       this.custPerHour.push(custNumberThisHour);
//     }
//   },


//   calcCookiesPerHour: function(){
//     this.getRandomCustomer();
//     for (let i = 0; i < hour.length; i++){
//       let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
//       this.dailyTotal += cookiesSold;
//       this.cookiesSoldPerHour.push(cookiesSold);
//     }
//   },


//   render(){
//     this.calcCookiesPerHour();
//     let cityList = document.getElementById('paris');
//     for (let i = 0; i < hour.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//       cityList.appendChild(listItem);
//     }
//     let listItemTotal = document.createElement('li');
//     listItemTotal.textContent ='Total cookies: ' + this.dailyTotal;
//     cityList.appendChild(listItemTotal);
//   }

// };





// let lima = {
//   name: 'lima',
//   minCus: 2,
//   maxCus: 16,
//   avg: 4.6,
//   dailyTotal: 0,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   getRandomCustomer: function(){
//     for ( let i = 0; i < hour.length; i++){
//       let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
//       this.custPerHour.push(custNumberThisHour);
//     }
//   },


//   calcCookiesPerHour: function(){
//     this.getRandomCustomer();
//     for (let i = 0; i < hour.length; i++){
//       let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
//       this.dailyTotal += cookiesSold;
//       this.cookiesSoldPerHour.push(cookiesSold);
//     }
//   },


//   render(){
//     this.calcCookiesPerHour();
//     let cityList = document.getElementById('lima');
//     for (let i = 0; i < hour.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//       cityList.appendChild(listItem);
//     }
//     let listItemTotal = document.createElement('li');
//     listItemTotal.textContent ='Total cookies: ' + this.dailyTotal;
//     cityList.appendChild(listItemTotal);
//   }

// };


// const storeArray = [seattle,tokyo,dubai,paris,lima];
// function allStoreRender (){
//   for (let i = 0; i < storeArray.length; i++){
//     storeArray[i].render();
//   }
// }

// allStoreRender();
