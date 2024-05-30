//Objects in javascript

const user = {
    name : "rahul",
    age :25,
    "i like rahul" : true,
};
user.name = "ajay";
delete user.age;
console.log(user["i like rahul"]);

for(key in user){
    console.log(user[key]);
}

const fun = (function (a) {
    delete a ;
    return a;
})(5);
console.log(fun) // output will be 5

const property = "firstName";
const name = "ajmal";
const users = {
    [property] : name,

}
console.log(users)


const obj = {
    a : "one",
    b : "two",
    a : "three",
}
console.log(obj)

//create a function multiplayByTwo(obj) that multiplies all numeric property values of 
// nums by 2
let nums = {
    a : 100,
    b : 200 ,
    title : "my nums",
};
multiplayByTwo(nums);

function multiplayByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2 ;
        }
    }
}
console.log(nums);

//what is the out put of the following code?
const a = {};
const b = {key : "b"};
const c  = {key : "c"};
a [b ] = 123;
a[c ] = 456; // 456 
console.log(a[b]);

// what is JSON.strigify and JSON.parse ?

const userss = {
    name : "ravi",
    age : 20,
};
//console.log(JSON.stringify(userss));
const strObj = JSON.stringify(userss);

localStorage.setItem ("test",strObj);
console.log(JSON.parse(localStorage.getItem("test")));

//what is the output?
//console.log([..."Lydia"]);

const item = {name : "Lydia",age : 21};
const admins = {admin : true , ...item};
console.log(admins);
//what is the output?
const settings = {
    username : "rahul",
    level : 19 ,
    health : 90,
};
const data = JSON.stringify(settings,["level","health"]);
console.log(data);

//qstn 8

const shape = {
    radius : 10,
    diameter() {
        return this.radius * 2; //normal function
    },
    perimeter: () => 2 * Math.PI * this.radius,//arrow function
};
console.log(shape.diameter());
console.log(shape.perimeter());

//destructuring

let ids ={
    name : "pathu",
    age : 26,
    fullName:{
        first : "pathu",
        last : "ayisha"

    },

};
//const name = "pthouse";
const{fullName : {first},} = ids;
console.log(first);
//what is output?
function getItems(fruitList, favoriteFruit, ...args){
    return [ ...fruitList,...args,favoriteFruit];
}
console.log(getItems(["banana","apple"],"pear","orange"));
//what is the out out?
let f ={greeting:"Hey!"};
let d;
d = f;
f.greeting = "Hello!";
console.log(d.greeting);

// what is the output?

console.log({ a: 1 }=={a : 1 });
console.log({ a: 1 }==={a : 1 });
 
//both are different memory space


//what  is the output 
let person = { name : "Lydia "};
const members = [person];
person = null;
console.log (members  );

//what is the output

const value = {number: 10 };
const multiply = (x ={...value})=>{
    console. log(x. number *= 2 )
};
multiply();//20 
multiply();//20 
multiply(value);//20 
multiply(value);//40 

//what is the output

function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name : "john",
        age : 50,
    };
return person ;
}
const personObj1 = {
    name : "Alex",
    age : 30 ,


}
const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1);
console.log(personObj2);
//what is shalow copy and deep copy?

//deep copy/clone an object

let userh = {
    name : "Roadside Coder",
    age : 24,
}
const objClone =  Object.assign({}, userh);
console.log(userh,objClone);
