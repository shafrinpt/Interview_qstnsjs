//Async its not write promise in the code the return will be automaticaly wrap the promise to convert the promise



// async function getData(){
//     return "Hello";
// }

// in promises 
const p = new Promise((resolve,reject)=>{
    resolve("Promise is resolved!!");
});

async function getData(){
    return p
}


const dataPromise = getData();
dataPromise.then(res => console.log(res));
//the getData() always return  a promise from itself

//using await with async?

//async and await is used to handle promises
//2.
const b = new Promise((resolve,reject)=>{
    resolve("its a Promise!!");
});

async function handlePromise(){
    const val = await p;
    console.log(val);
}
handlePromise();

//await can only be use inside an async function


//3.

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData(){
    try{
        const data = await fetch(API_URL);
        const jsonValue =  await data.json();
        console.log(jsonValue);
    }
    catch (err){

    }
}
fetchData();

//4.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function performTask() {
    try {
        console.log('Task started');
        await delay(2000);
        console.log('Task completed after 2 seconds');
    } catch (error) {
        console.error('Error performing task:', error);
    }
}

performTask();
//5.

// Using async/await to handle Promises
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
//6.
async function fetchData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }
  
  fetchData();
//7.

async function fetchData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
  
  fetchData();
//8. api call

async function fetchSequentialData() {
    try {
      let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data1 = await response1.json();
      console.log('First response:', data1);
  
      let response2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
      let data2 = await response2.json();
      console.log('Second response:', data2);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
  
  fetchSequentialData();
  