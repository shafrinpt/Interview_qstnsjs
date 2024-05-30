//Var Let and Const
//scope

{
    var a = 5;    //functional scope
}
console.log(a);

{
    let b = 6;
    console.log(b)    //block scope
}

//Variable shadowing

function test()  {
 let a  = "Hello";
 if(true) {
    let a = "Hi";
    console.log(a);  

 }
 console.log(a);
}
test();

//illegal shadowing
// function test()  {
//     var a  = "Hello";
//     let b = "Bye";
//     if(true) {
//        let a = "Hi";
//        var b ="Goodbye";
//        console.log(a);  
//        console.log(b);
   
//     }
    
//    }
//    test();


//hoisting
let e = 10;
 function multiply(x){
    return x * 10;
 };
 let b = multiply(e);
 console.log(b);


