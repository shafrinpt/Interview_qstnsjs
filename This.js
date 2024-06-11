//1
const student = {
    name : "shafrin",
    PrintName : function() {
      console.log(this.name)
    }
}
 student.PrintName();

 const student2 = {
  name : "deepika",
 }
 student.PrintName.call(student2);

 //2
 const obj2 = {
    a : 20,
    x : function() {
        const y = () => {
            console.log(this);
        };
        y();
    },
 };
 obj2.x();
 //3
 function getName(){
    console.log(this.age);
    console.log(this.mark);
 }

 const person1 = {
    name : "adithya",
    age : 26,
    mark :77,
    method : getName ,
 };

 const person2 = {
    name : "arya",
    age :22 ,
    mark : 88,
    method :getName,
 };

 person1.method();
 person2.method();

 //4

 function bankDetails(){
    console.log(this.accn);
    console.log(this.branch);
 }
 const bankvalues = {
    accn : 1234567,
    branch : "tirur",

 }
 const bankvalues2 = {
    accn : 09876543,
    branch : "kottakal",
 }
 bankDetails.call(bankvalues);

 const netGetName = bankDetails.bind(bankvalues2);
 netGetName();

 //5
 const users = {
    name : "pathu",
    age : 25,
    method (){
        const getNme = () => {
            return this;
        }
        return getNme;
    }
 }
 const nerGetNme = users.method();
 console.log(nerGetNme());