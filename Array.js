//bigginer  level 5 array  questions

//1.total sum of an array


const arr = [1, 2, 3, 4, 5];
function sumOfElements(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}


console.log(sumOfElements(arr));    

//2.reverce array



const arr1 = [1, 2, 3, 4, 5];

function reverseArray(arr1) {
    return arr1.slice().reverse();
}

console.log(reverseArray(arr1)); 

//3.filter out even numbers

let arr2 = [1,2,3,4,5,6];
function filterOddNumbers(arr2){
    return arr2.filter((num  => num % 2 === 0))
        
    
}
console.log(filterOddNumbers(arr2));

//4.find length of array

const arr4 = [1, 2, 3, 4, 5];
function arrayLength(arr4) {
    return arr4.length;
}

console.log(arrayLength(arr4));  

//5. remove element.
const arr3 = [1, 2, 3, 1, 4, 1];

function removeElement(arr3, value) {
    return arr3.filter(element => element !== value);
}


console.log(removeElement(arr3, 1));  


