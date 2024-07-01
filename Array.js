//bigginer  level 5 array  questions

//1.total sum of an array



const arr = [1,2,3,4,5];

function sumArra(arr){
    let sum = 0;
    for(let i = 0; i<arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArra(arr));

//2.find maximum element

const arr1 = [1, 2, 3, 4, 5,6,7];

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


console.log(findMax(arr1));




//3.Reverse an array

const arr2 = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}


console.log(reverseArray(arr2));

//4.concatination in two array


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function concatenateArrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}



console.log(concatenateArrays(array1, array2)); 

//5.remove duplicates from an array

const numbers = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


console.log(removeDuplicates(numbers)); 


