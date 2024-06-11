//example1
function AddValue(num){
    return num + num;
}
console.log(AddValue(5));

//example 2
function Wish(name){
    console.log(`Say ${name}`);
}
Wish("Good Morning!");
//example 3 substraction

function subValue(num1,num2){
    let sum = num1 - num2;
    console.log("total sum = " + sum);
}
subValue(8,4);

//example 4 
let sqareOfNums = (num)=>{
    return num * num;
}
console.log(sqareOfNums(5));
// example 5

const addVal = num => num + num;
console.log(addVal(3));

//example 5

const valSquare = (a,b) => a *b;
const sum = valSquare(7,9);
console.log(sum);

//exaple 6

function SaySomthing(name){
    console.log(`Hey How Are You ${name} !`);
}
SaySomthing("sanub");

//example 7


const divNum = (a,b) => {
    let result = a/b;
    return result;
}
console.log(divNum(200,2));


//example 8
(function(num){
    console.log(num + num);
})(5);

//exaple 9
 function wishSomthing(name = "henna"){
    console.log(`hey are u ok ${name} ?`);
 }
 wishSomthing();
 wishSomthing("rahul");

 //example 10
 
 let arr = [99,22,44,88,66];
 const NewArr = arr.map((num,i,arr)=>{
    return num + 1;
 });
 console.log(NewArr);
 

 





