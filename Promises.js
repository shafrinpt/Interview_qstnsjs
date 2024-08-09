//1.Basic promises

let promise = new Promise((resolve,reject)=>{
let success = true;
if(success){
    resolve("operation successful!");
}else{
    reject("operation failed!")
}
});

promise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

//2.promise with setTimeout?

function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${milliseconds} milliseconds`);
        }, milliseconds);
    });
}

delay(1000).then((message) => {
    console.log(message);
});
//3.chaining promises?

let promiseChain = new Promise((resolve)=>{
    resolve(10);
});

promiseChain.then((result)=>{
    return result*2;
}).then((result)=>{
    return result + 5;
}).then((result)=>{
    console.log(result);
})

//4.promise.all

let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve)=>setTimeout(resolve,100,'foo'));
let promise3 = 42;
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
});

//5.promise.race

let promis1 = new Promise((resolve)=>setTimeout(resolve,500,'one'));
let promis2 = new Promise((resolve) => setTimeout(resolve,100,'two'));
Promise.race([promis1,promis2]).then((value)=>{
    console.log(value);
})

//6.fetch data from multiple Apis

const fetchData1 = fetch('https://api.example.com/data1');
const fetchData2 = fetch('https://api.example.com/data2');
const fetchData3 = fetch('https://api.example.com/data3');

Promise.all([fetchData1, fetchData2, fetchData3])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
      console.log(data); // [data1, data2, data3]
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });

  //7.waiting multiple timers?

  const timer1 = new Promise(resolve =>setTimeout(resolve,1000,'Timer 1 finished'));
  const timer2 = new Promise(resolve => setTimeout(resolve,2000,'Timer 2 finished'));
  const timer3 = new Promise(resolve => setTimeout(resolve,3000,'Timer 3 finished'))
  
  Promise.all([timer1,timer2,timer3])
  .then(message =>{
    console.log(message);
  });
//8. api using then and catch methord

// Using Fetch API to get data from a public API


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  //chaining promises using api

  // Chaining multiple Promises
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => {
  console.log('First fetch:', data);
  return fetch('https://jsonplaceholder.typicode.com/todos/2');
})
.then(response => response.json())
.then(data => {
  console.log('Second fetch:', data);
})
.catch(error => {
  console.error('Error:', error);
});
//
