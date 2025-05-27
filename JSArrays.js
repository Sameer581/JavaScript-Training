// Case 1- Array Declaration Along With Values
const arr1=[10,20,30,40];
//console.log(arr1);
//console.log(arr1[0]);
//console.log(arr1[2]);

// Case 2 - Array Declaration and then giving values on index position
const arr2=[];
arr2[0]=3;
arr2[1]=5;
arr2[2]=7;
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2]);

// Case 3 - Using Array Constructor
const arr3= new Array("A","B","C");
//console.log(arr3);
//console.log(arr3[2]);

const arr5=["A", "B", "C"];
//console.log(arr5);

const arr4=[10];
//console.log(arr4);

const arr6= new Array(10);
//console.log(arr6);
//console.log(arr6.length);

const l = arr1.length;
//for(let i=0; i<l; i++)
  //  console.log(arr1[i]);

const arr7= [30,40,10,20,50];
//console.log(arr7.sort());

// // Array JS Methods
// const fruits = ["Banana", "Orange","Apple"];
// // Array JS To String
// console.log(fruits.toString());
// // Array Pop
// console.log(fruits.pop());
// // Array Push
// console.log(fruits.push("Kiwi"));
// // Array Slice
// console.log(fruits.slice(1));
// // Array Deletion
// //  delete fruits[0];
// // Array Shifting - remove first element and shifts remaining to the lower index 
// (fruits.shift());
// console.log(fruits);
// // Array Searching
// // indexof()
const arr=["a","b","a","g","e"];
let pos = arr.indexOf("e");
//console.log(pos);
let pos2 = arr.indexOf("a", 1);  // searching starts from 1st index
//console.log(pos2);

// lastindexof()
let pos3= arr.lastIndexOf("a");
console.log(pos3);

// includes()
console.log(arr.includes("g"));
console.log(arr.includes("z"));

// find ()
const num = [4,9,16,25,29];
let f = num.find(myfunc);
function myfunc(value,index,Array)
{
    return value > 18;
}

// Array Sorting
// 1. Sort()
 
// 2. Reverse()
const arrr= ["a","b","a","g", "e"];
console.log(arr.reverse());

// toSorted()
const sorted =arrr.toSorted();
console.log(sorted);

// 4. toReversed()
const reverse2= arr.toReversed();
console.log(reverse2);