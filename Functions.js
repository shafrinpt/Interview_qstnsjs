//Functions in javascript?
//1.what is function declaration?
// function square(num){
//     num * num;
// }
//what is function expression?
const square = function (num){
    return num * num;
}
console.log(square(5));
//3. what are the first class functions
function squares(num){
    return num + num;
}
function displaySquare(fn){
    console.log("sum of num =" + fn(5))
}
displaySquare(squares);
//4.what is IIFE(immediatly invoked functions expression)
(function immExp(num){
    console.log(num*num);
})(5);

//5.IIFE o/p based questions?
(function(x){
    return(function(y){
        console.log(x);
    })(2);
})(1); //1 
//function scope?
// var num1 =20,
//     num2 = 3,  //global scope
//     name = "shafrin";
    
    
// function multiplay(){
//     return num1 * num2;
// }
// multiplay(); //returns 60

// //a nested function example?
// function getScore() {
//     var num1 = 2,
//     num2 = 3;
//     function add(){
//         return name + 'scored' + (num1 + num2);
//     }
//     return add();
// }
//  getScore();

//7.function scope - o/p based Questions?

for(let i = 0;i< 5 ; i++){
    setTimeout(function(){
        console.log(i);
    },i * 1000);
}


//8.function hoisting?
console.log(x);
 functionName();
function functionName() {
    console.log("rahul ");
}
var x = 10;

//9.function hoisting o/p based questions?

 var x = 21;

 var fun = function () {
    console.log(x);
    var x = 20;
 };
  fun();

  //10.params vs arguments
  function multiplay(...num) {
     console.log(num[0] * num[1]);

  }
  var arr = [5,6];
  multiplay(...arr);

  //11.params vs arguments o.p based questions?

  const fn = (a,x,y,...numbers) => {
    console.log(x,y,numbers);
  };
  fn(5,6,7,8,9);
  //arrow function?
  const add = (firstNum , secondNum) => {
    return firstNum + secondNum;
  }
  
  //Arrow function vs Regular function?
  //1.syntax

//   function square(num){
//     return num * num ;
//   }

//   const square = (num) => {
//     return num *num;
//   }
  //2.implicit "return " keyword

//   const square = (num)=>num*num;
  //argument 

  function fnArr(){
    console.log(argument);
  }


//4.this keyword

