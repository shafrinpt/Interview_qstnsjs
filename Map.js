//Map() filter() reduce()

//what is map()?

// const nums = [1,2,3,4,5];
// let multiplyByThree = nums.map((num,i,arr) =>{
//     return num * 3;
// });
// console.log(multiplyByThree);

//what is filter()?
//num morethan two ;
// const numss = [4,5,1,2,6,7,9,0];
// let moreThanTwo = numss.filter((val)=>{
//     return val > 2;
// })
// console.log(moreThanTwo);

//what is reduce()?
//total sum of the array?
// const items = [1,2,3,5,6];
// const sum=items.reduce((acc,curr,i,arr)=>{
//     return acc+curr;

// },0);
// console.log(sum);

//polyfill for map()?

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i = 0;i<this.length;i++){
        temp.push(cb(this[i],i,this));

    }
    return temp;
};

const nums = [1,2,3,4,5];
let multiplyByThree = nums.myMap((num,i,arr) =>{
    return num * 3;
});
console.log(multiplyByThree);


//polyfil for filter?

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i = 0 ;i < this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i]);

    }
    return temp;
}
const numss = [4,5,1,2,6,7,9,0];
let moreThanTwo = numss.myFilter((val)=>{
    return val > 2;
})
console.log(moreThanTwo);

//polyfill for reduce()?

Array.prototype.myReduce = function (cb,initialValue) {
    var accumulator = initialValue;
    for(let i = 0;i< this.length;i++){
        accumulator = accumulator ? cb(accumulator, this[i] , i,this) : this[i];

    }
    return accumulator;
}

const items = [1,2,3,5,6];
const sum=items.myReduce((acc,curr,i,arr)=>{
    return acc+curr;

},0);
console.log(sum);

//map vs forEach() methord
const arr = [2,4,6,8,0];
const mapMethord = arr.map((ar)=>{
    return ar + 2;
});
const forEachMethord = arr.forEach((ar,i)=> {
    arr[i] =ar+1;

});
console.log(mapMethord,forEachMethord,arr);


//map,filter and reduce o/p based questions?
let students = [ 
    {name:"piyush",rollNumber : 31 , marks : 80},
    {name:"jenny",rollNumber : 15 , marks : 69},
    {name:"kushal",rollNumber : 16 , marks : 35},
    {name:"veena",rollNumber : 7 , marks : 55},

];
//1.return only name of the students in capital?
//forloop
// let names = [];
// for(let i = 0 ; i < students.length;i++){
//     names.push(students[i].name.toUpperCase());
// }
// console.log(names);
//byusing map
const names = students.map((stu)=>stu.name.toUpperCase());
console.log(names);

//2.return only details of those who scored morethan 60?
 const details = students.filter((stu) => stu.marks>60);
 console.log(details);
 //3.more than 60 marks and rollNumber grater than 15?
 const dtailss =students.filter((stu)=>stu.marks>60 && stu.rollNumber>15);
 console.log(dtailss);

 //4.sum of marks of all students?
 const sums = students.reduce((accu,curr)=>accu+curr.marks,0);
 console.log(sums);
 //5.return only names of students who scored morethan 60?
 const namess = students.filter((stu)=>stu.marks>60).map((stu)=>stu.name);
 console.log(namess);
 //6.return total marks for students with marks greater than 60 after 20 marks have been added
 //to those who scored less than 60?
 const totalMarks = students.map((stu)=>{
    if(stu.marks < 60) {
        stu.marks += 20;

    }
    return stu;
 })
 .filter((stu) => stu.marks > 60).reduce((acc,curr)=>acc+curr.marks,0);
 console.log(totalMarks);

