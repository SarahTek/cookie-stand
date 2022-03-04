'use strict';


let hour = ['6 am','7 am','8 am','9 am','10 am,','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
let seattle = {
  name: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avg: 6.3,
  dailyTotal: 0,
  custPerHour: [],
  cookiesSoldPerHour: [],
  getRandomCustomer: function(){
    for ( let i = 0; i < hour.length; i++){
      let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
      this.custPerHour.push(custNumberThisHour);
    }
  },


  calcCookiesPerHour: function(){
    this.getRandomCustomer();
    for (let i = 0; i < hour.length; i++){
      let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
      this.dailyTotal += cookiesSold;
      this.cookiesSoldPerHour.push(cookiesSold);
    }
  },


  render(){
    this.calcCookiesPerHour();
    let cityList = document.getElementById('seattle');
    for (let i = 0; i < hour.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      cityList.appendChild(listItem);
    }
  }

};





let tokyo = {
  name: 'tokyo',
  minCus: 3,
  maxCus: 24,
  avg: 1.2,
  dailyTotal: 0,
  custPerHour: [],
  cookiesSoldPerHour: [],
  getRandomCustomer: function(){
    for ( let i = 0; i < hour.length; i++){
      let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
      this.custPerHour.push(custNumberThisHour);
    }
  },


  calcCookiesPerHour: function(){
    this.getRandomCustomer();
    for (let i = 0; i < hour.length; i++){
      let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
      this.dailyTotal += cookiesSold;
      this.cookiesSoldPerHour.push(cookiesSold);
    }
  },


  render(){
    this.calcCookiesPerHour();
    let cityList = document.getElementById('tokyo');
    for (let i = 0; i < hour.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      cityList.appendChild(listItem);
    }
  }

};

let dubai = {
  name: 'dubai',
  minCus: 11,
  maxCus: 38,
  avg: 3.7,
  dailyTotal: 0,
  custPerHour: [],
  cookiesSoldPerHour: [],
  getRandomCustomer: function(){
    for ( let i = 0; i < hour.length; i++){
      let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
      this.custPerHour.push(custNumberThisHour);
    }
  },


  calcCookiesPerHour: function(){
    this.getRandomCustomer();
    for (let i = 0; i < hour.length; i++){
      let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
      this.dailyTotal += cookiesSold;
      this.cookiesSoldPerHour.push(cookiesSold);
    }
  },


  render(){
    this.calcCookiesPerHour();
    let cityList = document.getElementById('dubai');
    for (let i = 0; i < hour.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      cityList.appendChild(listItem);
    }
  }

};








let paris = {
  name: 'paris',
  minCus: 23,
  maxCus: 65,
  avg: 6.3,
  dailyTotal: 0,
  custPerHour: [],
  cookiesSoldPerHour: [],
  getRandomCustomer: function(){
    for ( let i = 0; i < hour.length; i++){
      let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
      this.custPerHour.push(custNumberThisHour);
    }
  },


  calcCookiesPerHour: function(){
    this.getRandomCustomer();
    for (let i = 0; i < hour.length; i++){
      let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
      this.dailyTotal += cookiesSold;
      this.cookiesSoldPerHour.push(cookiesSold);
    }
  },


  render(){
    this.calcCookiesPerHour();
    let cityList = document.getElementById('paris');
    for (let i = 0; i < hour.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      cityList.appendChild(listItem);
    }
  }

};





let lima = {
  name: 'lima',
  minCus: 2,
  maxCus: 16,
  avg: 4.6,
  dailyTotal: 0,
  custPerHour: [],
  cookiesSoldPerHour: [],
  getRandomCustomer: function(){
    for ( let i = 0; i < hour.length; i++){
      let custNumberThisHour = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
      this.custPerHour.push(custNumberThisHour);
    }
  },


  calcCookiesPerHour: function(){
    this.getRandomCustomer();
    for (let i = 0; i < hour.length; i++){
      let cookiesSold = Math.ceil( this.custPerHour[i] * this.avg);
      this.dailyTotal += cookiesSold;
      this.cookiesSoldPerHour.push(cookiesSold);
    }
  },


  render(){
    this.calcCookiesPerHour();
    let cityList = document.getElementById('lima');
    for (let i = 0; i < hour.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hour[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      cityList.appendChild(listItem);
    }
  }

};


const storeArray = [seattle,tokyo,dubai,paris,lima];
function allStoreRender (){
  for (let i = 0; i < storeArray.length; i++){
    storeArray[i].render();
  }
}

allStoreRender();
