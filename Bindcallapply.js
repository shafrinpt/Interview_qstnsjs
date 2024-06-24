//call methord
//1.

const students = {
    firstName : "fathima",
    lastName : "shafrin pt",
    fullName : function (){
        console.log(this.firstName+""+this.lastName);
    }
}
students.fullName();
const student2 = {
    firstName : "Ayisha",
    lastName : "ziba",
    
}

students.fullName.call(student2);

//2.
function Greeting(){
    console.log(`hey ${this.name}!`);
}
const person1 = {
    name : "Goodmorning"
}
Greeting.call(person1);
//3.
function student(name,age){
    console.log(`i am ${this.name} my age is ${this.age}`);
}
const details = {
    name : "fathima shafrin pt",
    age :26,
}
student.call(details);
//4.
let name = {
    firstName : "fathima",
    lastName : "shafrin",
}
let value = function(){
    console.log(this.firstName + " "+this.lastName);
}
value.call(name);
let name2 = {
    firstName : "sulaika",
    lastName :"mehza",
}
value.call(name2);
//5
function StuDetails(mark,school){
    console.log(`iam ${this.name}i got ${mark} iam pass my school name is ${school}`);
}
const Details = {
    name : "rahul",
}
StuDetails.call(Details,70,"MySchool");

//apply

//6 .

function studentsDeta(mark,details,age){
    console.log(this.name + " ",details + " ",mark + " ",age);
}

const students1 = {
    name : "rahul"
}
studentsDeta.apply(students1,[67,"tirur",26]);

//7

function greet() {
    console.log(`Hello, my name is ${this.name}`);
}
const person = { name: "Charlie" };
greet.apply(person); 

//8.
function introduce(age, city) {
    console.log(`Hello, my name is ${this.name}. I am ${age} years old and I live in ${city}.`);
}
const person3 = { name: "Diana" };
introduce.apply(person3, [30, "Los Angeles"]); 

//bind

//9.
function introduce(age, city) {
    console.log(`Hello, my name is ${this.name}. I am ${age} years old and I live in ${city}.`);
}
const Stu = { name: "Frank" };
const boundIntroduce = introduce.bind(Stu, 40, "Chicago");
boundIntroduce();


//10.

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}
const Detailss = { name: "Hank" };

const boundGreet = greet.bind(Detailss);
boundGreet("Hello"); 



