'use strict';


let table = document.getElementById('table');
let hour = ['6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
let storeArray = [];

function Store(name,minCus,maxCus,avg){
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avg = avg;
  this.dailyTotal= 0;
  this.custPerHour = [];
  this.cookiesSoldPerHour = [];
  this.hour = hour;
  storeArray.push(this);

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
  return this.dailyTotal, this.cookiesSold;
};

Store.prototype.render = function(){
  this.calcCookiesPerHour();
  let storeRow = document.createElement('tr');
  table.appendChild(storeRow);
  let storeName = document.createElement('td');
  storeName.textContent = this.name;
  storeRow.appendChild(storeName);
  for (let i = 0; i < hour.length; i++){
    let listItem = document.createElement('td');
    listItem.textContent = this.cookiesSoldPerHour[i];
    storeRow.appendChild(listItem);
  }
  let listItemTotal = document.createElement('td');
  listItemTotal.textContent = this.dailyTotal;
  storeRow.appendChild(listItemTotal);
};

function makeHeader(){
  let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'location name';
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hour.length; i++){
    tableHeader = document.createElement('th');
    tableHeader.textContent = hour[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Total';
  tableRow.appendChild(tableHeader);
  table.appendChild(tableRow);
}

function makeFooter(){
  let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('td');
  tableHeader.textContent = 'Hourly Total';
  tableRow.appendChild(tableHeader);
  let grandTotal = 0;
  for (let i = 0; i < hour.length; i++){
    let hourlyTotal = 0;
    for (let j = 0; j < storeArray.length; j++){
      hourlyTotal += storeArray[j].cookiesSoldPerHour[i];
      grandTotal += storeArray[j].cookiesSoldPerHour[i];
    }
    let tableHour = document.createElement('td');
    tableHour.textContent = hourlyTotal;
    tableRow.appendChild(tableHour);
  }
  let tableTotal = document.createElement('td');
  tableTotal.textContent = grandTotal;
  tableRow.appendChild(tableTotal);
  table.appendChild(tableRow);
}
new Store('Seattle',23,65,6.3),
new Store('Tokyo',3,24,1.2),
new Store('Dubai',11,38,3.7),
new Store('Paris',23,65,6.3),
new Store('Lima',2,16,4.6),

makeHeader();
for( let i = 0; i < storeArray.length; i++){
  storeArray[i].render();
}
makeFooter();
