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

// ex 1:
const steps1 = [1000, 2000, 4000];
steps1.map((e, i) => {
    steps1[i] *= 2;
})
console.log(steps)

//ex 2
const minutes = [1, 5, 10];
minutes.map((e, i) => {
    minutes[i] *= 60;
})
console.log(minutes)

//ex 3
const pricest = [200, 350, 500];
pricest.map((e, i) => {
    pricest[i] += 50;
})
console.log(pricest)

// ex 4
const marks = [35, 72, 88, 40];
marks.map((e, i) => {
    marks[i] = e >= 40 ? `${e} : pass` : `${e} : fail`;
})
console.log(marks)

// ex 5
const name3 = ['rahul', 'neha', 'amit'];
name3.map((e, i) => {
    name3[i] = e.toUpperCase();
})
console.log(name3)

// ex 6
const prices1 = [500, 1000, 1500];
prices1.map((e, i) => {
    prices1[i] = e - (e * 0.10)
})
console.log(prices1)

// ex 7
const score = [45, 60, 85];
score.map((e, i) => {
    if (e >= 80) { score[i] += 20; }
    else if (e >= 50) { score[i] += 10; }
})
console.log(score)

// ex 8
const celsius = [0, 20, 30];
let fehrenheit = celsius.map(e => ((e * 9 / 5) + 32))
console.log(fehrenheit)

// ex 9
const numbers = [1, 2, 3, 4];
let table = numbers.map((e, i) => (`${e} * ${i} = ${e * i}`))
console.log(table)

///filter 
//filter tyare use karvu ke jyare ek new array create karvo chhe
//with condition
// in return true/false
//if true ---> add into new array
// if else(false)----> not add into new array
let laptop_price=[15000,20000,30000,40000,45000];
let expensive_laptop=laptop_price.filter((price)=>{
    if (price > 30000) return true;

});
//je value 30000 thi vadhare chhhe te new add thase and biji value ne array ma add nahi kare 
 // use case -- DATA ma this specific data new array ma store karvo hoy based on condition
 let product_type = ["mobile","tablet","laptop","mouse"];

 let filter_product_type = product_type.filter((type)=>{
    if(type==="tablet"|| type === "mobile") return true;
 });

 //reduce 
 // reduce tyre j use karvu ke jare ek single value calulate karvi hoy from array
 let total_price =[10,68,45,50,52,40];

 let Final_price = total_price.reduce((accumulator,val)=>{
    return accumulator +val;
 },0);// initial value of accumulator
 // 0+10 =>10
 // 10 + 68 => 78
 // 78 + 45 => 123
 console.log("Final price:",Final_price );
 //accumulator --> je value function ma return thashe te accumulator ma store thashe --> accumulator name change kari sko cho
 //val --> array ni dareak value

 //use case --> data ma thi single value calcualte karvi hoy
 //ex.product am thi total price calculate karvi hoy

 //find
 //find tyre j use karvu ke jyre array mathi ek value find karvi hoy based on condition 
 //find () return kare chhe array no element --> callback not return value nathi
 //never returns what you return you return inside it
 //returns the array element itself -- not return array
 //.find() stops at the first match
 // it does not continue looping

 let product=["laptop","mobile","Tablet","Dekstop","Smart Watch"];
 let find_product = product.find ((item)=>{
    if (item === "dekstop"){
        return true;
    }else if(item === "tablet"){
        return true;
    }else{
        return false;
    }
 });
 
 //use case -- data ma thi ek value find karvi hoy  based on condition
 //ex. product ma thi specific product find karvo hoy based on name 

 //find vs filter 
 // real -life scenario : sopping mail Security
 // your are a security at a shopping mail
 //check the list of visitors 
 let people = ["john","sara","mike","Anna","David","sara"];
 // find --> you are looking for the first person named "sara"in the list and stop serching paheli var j male,e j and angel check j na kare)
 let person =people.find((name)=>name === "sara");
 console.log("find",person);

 // example 2: Book bus for travel 

 //check kare chhe array ma koi pan ek item codition satisfy kare chhe ke nahi
 // condition true aave tyre stop kare
 //some ()vs find ()return value of array
 //give ans in true and false 
 let marks1=[10,20,35,90];
 let any = marks1.some((val)=>{
    if (val>85)return 12;
    //if (val<85)return "need improvement";
 });
 console.log(any)
 //use case --check if some prouduct are out of stock in your cart
 
 
 //every 
 //check kare chhe ke array ma badha j items condition satisfy kare chhe ke nahi
 //true -->baha items condition match kare
 //false --ek pan fail thay to
 let def=[20,30,5,35];
 let num =def.every(function(val){
    return val<40;
 });

 //use case -->check all student is pass or not 

 //some(),find(),filter(),every()
 //let products =["tablet","mobile","laptop","mobile"]
 //method --> condition -->output
 //.some ()--> item === "mobile"--> true
 //.find()--> item === "mobile"-->mobile
//.filter()--> item === "mobile"-->["mobile","mobile"]
//.every()--> item === "mobile"-->false

//destructuring operate -- give vaule to variable (ex.we don't use every time arr1[1],just save it into variable let [,k]=arr1)
let arr50 =[1,2,3,4,5]
//let j = arr50[0];-->1
//let k = arr50[2];-->3
let [ j, ,k]=arr50;//-->destructuring
//let [, ,n]=arr;
console.log(k);
let user_data =["test","test@gmail.com","male","surat"]
// name ,email,gender,city 
// console.log ("name",name)

//spread opreator -- copy value from main array
let arr8 =[1,2,3,4,5,6,7];
// let arr50 =arr3;//just give reference not copy valuation you change into arr50 that will be change arr3 too)
let arr9 =[...arr8];
//...-->rest -->into function 
//...-->spread --> into Array and object ---copy
let temp_arr =[1,2,3];
let temp_arr2 =[4,5,6];
let mix_arr =[...temp_arr,...temp_arr2];


/************************************************
MAP + FILTER + REDUCE PRACTICE (Q1–Q20)
************************************************/

/* =========================
Q1. Grocery Store – Total Cost
========================= */
const prices10 = [50, 120, 300, 80, 200];

const totalCost = prices1
  .filter(price => price > 100)
  .map(price => price * 1.05)
  .reduce((sum, price) => sum + price, 0);

console.log(totalCost);
// Answer: 651
// Why: Items >100 taxed 5% then summed


/* =========================
Q2. Fitness App – Weekly Calories
========================= */
const minutes1 = [10, 25, 40, 15, 60];

const totalCalories11 = minutes1
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);

console.log(totalCalories);
// Answer: 500
// Why: Valid workout days converted to calories


/* =========================
Q3. Exam Results – Total Passed Marks
========================= */
const marks10 = [35, 55, 80, 20, 45];

const totalPassedMarks = marks1
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);

console.log(totalPassedMarks);
// Answer: 180
// Why: Only passing marks added


/* =========================
Q4. Bank App – Total Credits
========================= */
const transactions10 = [500, -200, 1000, -300, 700];

const totalCredits = transactions1
  .filter(amount => amount > 0)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCredits);
// Answer: 2200
// Why: Only positive transactions counted


/* =========================
Q5. Online Sale – Discounted Bill
========================= */
const prices20 = [800, 1500, 3000, 600, 1200];

const discountedBill = prices2
  .filter(price => price > 1000)
  .map(price => price * 0.85)
  .reduce((sum, price) => sum + price, 0);

console.log(discountedBill);
// Answer: 4845
// Why: Items above 1000 discounted 15%


/* =========================
Q6. Attendance – Reward Points
========================= */
const hours1 = [5, 7, 8, 6, 9];

const rewardPoints = hours1
  .filter(hour => hour >= 7)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);

console.log(rewardPoints);
// Answer: 240
// Why: Only valid hours earn points


/* =========================
Q7. Delivery App – Total Distance
========================= */
const distances = [3, 6, 10, 4, 8];

const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);

console.log(totalDistance);
// Answer: 27
// Why: Long trips get 1km bonus


/* =========================
Q8. Salary System – Final Salary
========================= */
const salaries = [18000, 25000, 30000, 15000];

const totalSalary = salaries
  .filter(sal => sal > 20000)
  .map(sal => sal + 2000)
  .reduce((sum, sal) => sum + sal, 0);

console.log(totalSalary);
// Answer: 59000
// Why: Eligible salaries get bonus


/* =========================
Q9. Study App – Total Study Time
========================= */
const hours2 = [0.5, 1.5, 2, 0.75, 3];

const totalStudyMinutes = hours2
  .filter(hour => hour > 1)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(totalStudyMinutes);
// Answer: 390
// Why: Sessions >1hr converted to minutes


/* =========================
Q10. Electricity Usage – Monthly Bill
========================= */
const units = [80, 120, 200, 90, 150];

const electricityBill = units
  .filter(unit => unit > 100)
  .map(unit => unit * 6)
  .reduce((sum, cost) => sum + cost, 0);

console.log(electricityBill);
// Answer: 2820
// Why: Usage >100 charged per unit


/* =========================
Q11. Game Scores – Final Power Score
========================= */
const scores11 = [30, 50, 90, 20, 70];

const powerScore = scores1
  .filter(score => score > 40)
  .map(score => score * 2)
  .reduce((sum, score) => sum + score, 0);

console.log(powerScore);
// Answer: 420
// Why: Qualified scores doubled


/* =========================
Q12. Travel App – Total Fare
========================= */
const rides = [5, 12, 20, 8, 15];

const totalFare = rides
  .filter(km => km > 10)
  .map(km => km + 50)
  .reduce((sum, fare) => sum + fare, 0);

console.log(totalFare);
// Answer: 147
// Why: Long rides get service fee


/* =========================
Q13. Office Work – Productive Hours
========================= */
const hours3 = [4, 6, 8, 5, 9];

const productiveMinutes = hours3
  .filter(hour => hour >= 6)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(productiveMinutes);
// Answer: 1380
// Why: Productive hours converted to minutes


/* =========================
Q14. Shopping Cart – Reward Coins
========================= */
const purchases = [300, 800, 1200, 400];

const rewardCoins = purchases
  .filter(amount => amount > 500)
  .map(() => 10)
  .reduce((sum, coin) => sum + coin, 0);

console.log(rewardCoins);
// Answer: 20
// Why: Each qualifying purchase gives 10 coins


/* =========================
Q15. Fuel App – Total Fuel Cost
========================= */
const liters = [3, 6, 10, 4, 8];

const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);

console.log(fuelCost);
// Answer: 2520
// Why: Fuel above 5L charged per liter


/* =========================
Q16. Interview Classic – Sum of Cubes
========================= */
const numbers10 = [1, 2, 3, 4, 5];

const sumOfCubes = numbers1
  .filter(num => num % 2 !== 0)
  .map(num => num ** 3)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfCubes);
// Answer: 153
// Why: Odd numbers cubed and added


/* =========================
Q17. Performance Tracking – Bonus Points
========================= */
const scores20 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;

const bonusScore = scores2
  .filter(score => score > avg)
  .map(score => score + 5)
  .reduce((sum, score) => sum + score, 0);

console.log(bonusScore);
// Answer: 100
// Why: Above-average scores get bonus


/* =========================
Q18. Subscription App – Final Bill
========================= */
const plans = [199, 399, 599, 299];

const finalBill = plans
  .filter(plan => plan > 300)
  .map(plan => plan * 1.18)
  .reduce((sum, plan) => sum + plan, 0);

console.log(finalBill);
// Answer: 1177.82
// Why: Premium plans taxed 18%


/* =========================
Q19. Learning App – Achievement Score
========================= */
const scores3 = [45, 60, 70, 30, 80];

const achievementScore = scores3
  .filter(score => score >= 60)
  .map(score => score * score)
  .reduce((sum, score) => sum + score, 0);

console.log(achievementScore);
// Answer: 14900
// Why: Qualified scores squared and summed


/* =========================
Q20. Interview Finisher – Final Sum
========================= */
const numbers2 = [3, 6, 9, 10, 12];

const finalSum = numbers2
  .filter(num => num % 3 === 0)
  .map(num => num * 10)
  .reduce((sum, num) => sum + num, 0);

console.log(finalSum);
// Answer: 300
// Why: Numbers divisible by 3 multiplied and added
