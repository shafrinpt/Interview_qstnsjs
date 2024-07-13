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



//1.find longest word in array

const word = ["apple","banana","chery","dates","blackberry"];


function findLongestWord(arr){
    let longest = arr[0];
    for(let i = 0 ; i< arr.length;i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}

console.log(findLongestWord(word));


//2.find shortest word in array?

const vehicles = ["cars","cycle","bus","bike","scooter"];
function findShortWord(arr){
    let shortest = arr[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i].length<shortest.length){
            shortest = arr[i];
        }
    }
    return shortest;
}
console.log(findShortWord(vehicles));

//3.calculate the total length of all words in an array?

const vegitables = ["tomato","potato","ginger","onion","chilli","brigal"];

function totalLength(arr){
    let total = 0;
    for(let i=0;i<arr.length;i++){
        total += arr[i].length;
    }
    return total;
}
console.log(totalLength(vegitables));

//4.reverse an array of words?

const colors = ["red","blue","black","white","yellow"];
function reverseArray(arr){
    for(let i = 0 ; i<arr.length/2;i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1- i];
        arr[arr.length-1-i] = temp;

    }
    return arr;
}
console.log(reverseArray(colors));

//5.concatenate all words in an array into a single string?

const fruits = ["apple","banana","kiwi","berry","pappaya"];
function singleString(arr){
    let concate = [] ;
    for(let i = 0;i<arr.length;i++){
        concate += arr[i];
    }
    return concate;
}

console.log(singleString(fruits));

//6.create an array of the length of each words?

const items = [ "comb","bag","ac","almira","pillows"];

function wordsLength(arr){
    let length = [];
    for(let i = 0;i<arr.length;i++){
        length.push(arr[i].length);
    }
    return length;
}
console.log(wordsLength(items));

//7.capitalise the first letter of each words?

const words = ["apple", "banana", "cherry"];
function capitalizeWords(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return result;
}

console.log(capitalizeWords(words));

//8.create new array with words is uppercase?

const values = ["mango","apple","pinapple","mangostine"];

function newUppercase(arr){
    let result = [];
    for(let i =0;i<arr.length;i++){
        result.push(arr[i].toUpperCase());
    }
    return result;
}
console.log(newUppercase(values));