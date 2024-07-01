//1.
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 1000);

setTimeout(() => {
    console.log("Timeout 2");
}, 500);

console.log("End");

//2.

console.log("start");
setTimeout(function cbT(){
    console.log("CB setTimeout");
},5000);
fetch("https://api.netflix.com").then(function cbF(){
    console.log("CBF Netflix");
});
console.log("end");

//3.

console.log("Start");

setImmediate(() => {
    console.log("Immediate");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");



