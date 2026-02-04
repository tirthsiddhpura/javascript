// Arrat --hold multiple vlaues at same time
//let data =["product_name",50000,'20%']
//["a","b","hello"]
//[2,4,5,6]

//create
//define a variable =[Multiple values]
let arr =[1,2,3,4,5]
// let product_dta =["iphone17 promax",199999,"20%","Mobile"]

//access
//position =[0 1 2 3] --> index
//access
//array_name[position(index)]
arr[0];

//modify
//array name[position] =new value
arr[0]=10;

//Array Methods:(variable_name.method_name())
//push,pop,shift,unshift,splice,slice,reverse,sort
//push -->enter new value into array -- place it into last
arr.push(5);
//variable || function.method --> koi variable ke function in pachhal dot(.)kari ne lakh to te method kevai
// use case -- enter new products into exisiting products list 

//pop --> remove last vlaue into array
arr.pop()
//use case --remove last product you add into your list

//shift -- remove first value into array 
arr.shift()

//unshift -- add value into array --first
arr.unshift(10)
//use case --add a value into top of that data you recieve


//splic - remove vlaue into array --specific position and specific number of values
//into ()- first index (position),how many value you want to remove
let e =[50, 60, 30, 40, 10];
//e.splice (3,2);
//e.splice(3,0,50,100)
//use case --select msg and remove multiple msg at on click

//slice - copy values from array -- specific position and specific number of values
//new variable = array_name.slice(start index,end index)

// start index -- include into copy
//end index --not include into copy
let f= [100,50,25,0];
let new_f=f.slice(1,3);
//use case -- copy specific data and save it into new variable
//Genrate a report based on date and genrate a file or save the file into your local machine 

//splice vs slice
//splice --remove vaue into main array or modify new array 
//slice  -- copy  value from main array or modify new array hold th value that you can into

//reverse -- reverse vlaue of array
let g =[25,30,40,85];
//g.reverse();
//use case -- show latest update first into your frontend 

//sort -- set into assending order
let h =[50,60,70,80,90];
//h.sort();
//let h=[11,62,3,4,25];
//let sr =h.sort (function(a,b){
// return a -b ;//assending order
 // })
 let arr1 =[10,2,5,20,30];

 let arr2 =["b","f","z","q","m","k"];

 let arr3 =[ 'hello','Aero','Right','Array','objects','variable'];

 // // example 1:
 let tasks = ['Wake up', 'Brush teeth'];
 tasks.push("but Milk")

// // example 2:
 let notifications = ['Email', 'Message', 'Reminder'];
 notifications.pop()

// //example 3 :
 let customers = ['Customer1', 'Customer2', 'Customer3'];
 customers.shift()

// // ex 4:
 let playlist = ['Song B', 'Song C'];
 playlist.unshift("Song A")

// // ex 5: 
 let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
 students.splice(1,1, "Jhon", "Sara")
 console.log(students)

// // ex 6
 let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
  
// // ex 7
 let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 weekendDays = days.slice(5,)

// // ex 8
 let levels = ['Easy', 'Medium', 'Hard'];
 levels.sort().reverse()

// //ex 9
 let scores = [45, 12, 78, 34, 89];
 scores.sort((a, b) => a - b)

// //ex 10
let prices = [199, 49, 999, 299, 149];
 prices.sort((a, b) => a - b)

 // // ex 11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
 let newProducts = products.slice(0,3)

// //ex 12
 let colors = ['Red', 'Green', 'Blue', 'Yellow'];
 colors.splice(3,1,"Purple", "orange")

// // ex 13
 let steps = ['Step 1', 'Step 2', 'Step 3'];
 steps.sort().reverse().push("Final Step")
  console.log(steps)

// // ex 14
 let names = ['alice', 'Bob', 'charlie', 'David', "Asda"];
  names.sort((a,b)=>{
      return a.toLowerCase().localeCompare(b.toLowerCase())
 })
  console.log(names)

 let ar8r = ['10', '2', '5', '30', '20']; // sort() cant sort numberically
 arr.sort((a, b) => a - b)
 console.log(arr)

  let arr5 = ['b', 'f', 'a', 'r', 'w', 'c', 'h', 'i']
 arr5.sort()
 console.log(arr5)

let i = [10, 54, 2, 5, 45, 23, 345, 23];

let newI = []
 i.forEach(e => {
     newI.push(e + 10);
 })
 console.log(newI)

 i.map(e => {
     newI.push(e+10)
 })
  console.log(newI)

 

// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically

let movies = ['Avatar', 'Titanic', 'Gladiator'];

// Add 'Inception' to the end of the array
console.log(movies.push('Inception'));
// Remove the first movie from the array
console.log(movies.shift());

// Sort the movies alphabetically
console.log(movies.sort());

// Final value of movies:
// ['Gladiator', 'Inception', 'Titanic']



// Q16. splice() return value
// splice(startIndex, deleteCount)
// It returns the removed elements as a new array

let nums1 = [1, 2, 3, 4];

// Removes 2 elements starting from index 1 (removes 2 and 3)
let removedNums = nums1.splice(1, 2);
console.log(removedNums);
// removedNums → [2, 3]
// nums1 → [1, 4]



// Q17. slice() immutability check
// slice(startIndex, endIndex)
// It does NOT change the original array

let nums2 = [10, 20, 30, 40];

// Extracts elements from index 1 up to (but not including) index 3
let result = nums2.slice(1, 3);
console.log(result);
// result → [20, 30]
// nums2 remains → [10, 20, 30, 40]



// Q19. reverse() mutation
// reverse() mutates the original array and returns the same reference

let letters = ['a', 'b', 'c'];

// Reverses the array in place
let reversedLetters = letters.reverse();
console.log(reversedLetters);
// letters → ['c', 'b', 'a']
// reversedLetters → ['c', 'b', 'a']
// Both variables point to the same array



// Q21. splice() edge case
// What happens if deleteCount is 0?
// No elements are removed, only insertion happens

let arr4 = ['x', 'y', 'z'];

// Insert 'new' at index 1 without deleting anything
arr4.splice(1, 0, 'new');
console.log(arr4);
// arr4 → ['x', 'new', 'y', 'z']



// Q23. slice() negative index
// Negative indexes count from the end of the array

let values = [100, 200, 300, 400, 500];

// slice(-3, -1) means:
// start at 3rd element from the end (300)
// end at 1st element from the end (not included)
let sliced = values.slice(-3, -1);
console.log(sliced);
// sliced → [300, 400]



// Q24. splice() vs slice()
// a) Use splice() when you want to update the original array
// b) Use slice() when you want to keep the original array unchanged



// Q25. Chained methods (brain teaser)
// shift() removes and returns the first element
// push() adds an element to the end of the array

let arr7 = [1, 2, 3];

// shift() removes 1 → arr7 becomes [2, 3]
// push(1) adds it to the end
arr7.push(arr7.shift());
console.log();
// Final value of arr7 → [2, 3, 1]


//For each loop
//For Each --Array ni dareak value mate loop chlse 
let t =[10,35,40,68];

 t.forEach((val)=>{
    let new_val =val +10;
    console.log(new_val);
 })

 //example
 let a =[10,20,30,40];

 a.forEach((val)=>{
    let new_val =val + 5;
    console.log(new_val);
})

//important into array
// now all method are used in real world projects 
//all methods are working with function
//maniupulate data using array methods and function 

//.map() Method:
// map tyre j use karvu ke jare ek new array create karvo chhe
//first map create a black array --only for understanding
let data =[10,20,50,40,15];
//same like a for each loop but map return a new array
let temp_data =data.map((val)=>{
    if(val>15){
        return val;
    }
});

// 1. Double daily steps count
// Real life: Fitness app doubling step goal
// const steps = [1000, 2000, 3000];
// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = steps.map(doubleSteps);


// 2. Convert minutes to seconds
// Real life: Video duration calculation
// const minutes = [1, 5, 10];
// const seconds = minutes.map(function(min) {
//   return min * 60;
// });


// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app
// const prices = [200, 350, 500];
// const finalPrices = prices.map(price => price + 50);


// 4. Convert exam marks to grades
// Real life: Result system
// const marks = [35, 72, 88, 40];
// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }
// const grades = marks.map(getGrade);


// 5. Capitalize names
// Real life: Display usernames properly
// const names = ['rahul', 'neha', 'amit'];
// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );


// 6. Apply 10% discount
// Real life: Shopping sale
// const prices = [500, 1000, 1500];
// function applyDiscount(price) {
//   return price - price * 0.10;
// }
// const discounted = prices.map(applyDiscount);


// 7. Add bonus points to scores based on condition
// Real life: Game scoring system
// const scores = [45, 60, 85];
// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });


// 8. Convert temperatures with formula
// Real life: Weather app
// const celsius = [0, 20, 30];
// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }
// const fahrenheit = celsius.map(toFahrenheit);


// 9. Generate table of numbers
// Real life: Math learning app
// const numbers = [1, 2, 3, 4];
// const tableOfTwo = numbers.map(num => num * 2);


// 10. Combine map with string formatting
// Real life: SMS notification system
// const balances = [500, 1200, 300];
// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );

//use case --data ma thi specific data new array ma store karv hoy
//ex. product ma thi specific catagory na product new array ma store karva hoy
//if you want to show 