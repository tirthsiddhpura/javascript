<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<br>
<hr>
<br>

<h3>Example 1 :</h3>
<p>true + false</p>
<p><b>Answer:</b> 1</p>

<hr>

<h3>Example 2 :</h3>
<p>null + 1</p>
<p><b>Answer:</b> 1</p>

<hr>

<h3>Example 3 :</h3>
<p>"12" + 12</p>
<p><b>Answer:</b> "1212"</p>

<hr>

<h3>Example 4 :</h3>
<p>!!undefined</p>
<p><b>Answer:</b> false</p>

<hr>

<h3>Example 5 :</h3>
<p>"12" - 1</p>
<p><b>Answer:</b> 11</p>

Javascript Operator
<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){

    console.log("Both are greater than 5");

}else{

    console.log("One or both are not greater than 5");

}</p>
<p>True</p>
<p>Why:Both conditions are true</p>
</div>
 
<div>

<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){

    console.log("Acess granted");

}else{

    console.log("Acess Denied");

}</p>
<p>Access granted</p>
<p>Why:At least one condition is true</p>
</div>
 
<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){

    console.log("Hot day");

}else{

    console.log("Pleasant day");

}</p>
<p> Hot day</p>

</div><p>Why:temp > 30 is true, !true becomes false</p>
 
<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){

    console.log("Truthy value");

}else{

    console.log("Falsy value");

}</p>
<p>Truthy value</p>
<p>Why:0 is a falsy value > </p>
</div>
 
<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Grade:C</p>
<p>Why: 78 >= 70 → true
So grade = "C"</p>


</div>
 
<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Status:Gold</p>
<p>Why: 120 >= 100 → Gold</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Access: Deny</p>
<p>Why:true && false = false</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>6</p>
<p>why: Value increases after execution</p>

</div>
 
<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>9</p>
<p>why: Value increases before execution</p>

</div>
 
<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>5 4</p>
<p>Why:c = 4 (old value)
b = 5 (incremented after)</p>
<p>why: c gets old value → 4
b becomes 5</p>

</div>
 
<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>5 5</p>
<p>why: b increases first
both become 5</p>


</div>
 
<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>10  9</p>
<p>why: Prints old value
Then decrements</p>

</div>
 
<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>12</p>
<p>Why:n++ → 5 (then n = 6)
++n → 7
5 + 7 = 12</p>
<p>why: n++ → 5 → n becomes 6
++n → 7
5 + 7 = 12</p>

</div>
 
<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){

result ++likes;

}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>101</p>
<p>why: ++likes or likes++ is valid
result ++likes is invalid syntax</p>


</div>
 
<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   

console.log("Matched");
}else{

    console.log("Not Matched"); 

}</p>
<p>Matched</p>
<p>Why:Comparison happens before decrement</p>
</div>


### 1. Get even numbers
**Real life:** Find even roll numbers
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
ans:const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
```
---

### 2. Filter adults
**Real life:** Allow only 3+ users
```js
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
ans:const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
```

---

### 3. Remove empty items
**Real life:** Clean user input
```js
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
ans:const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
```
---

### 4. Filter passing marks
**Real life:** Exam result system
```js
const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
ans:const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
```
---

### 5. Get affordable prices
**Real life:** Shopping app price filter
```js
const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
ans:const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
```
---

### 6. Filter long words
**Real life:** Search keyword validation
```js
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
ans:const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
```

### 7. Filter positive numbers
**Real life:** Bank transaction validation
```js
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
ans:const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
```

---

### 8. Filter numbers within a range
**Real life:** Score selection
```js
const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
ans:const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
```



JavaScript .reduce() Method Example:

### 1. Total money in wallet

**Real life:** Add all cash amounts
```js
const money = [100, 200, 50];

const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
ans:const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
// Output: 350
```
 
---
 
### 2. Total steps walked in a week
**Real life:** Fitness tracker
```js
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
ans:const steps = [3000, 5000, 4000, 6000];
const weeklySteps = steps.reduce((total, step) => total + step, 0);
// Output: 18000
```
 
---
 
### 3. Find total cart price
**Real life:** Shopping bill
```js
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
ans:const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
// Output: 997
```
 
---
 
### 4. Find maximum score
**Real life:** Highest exam mark
```js
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
ans:const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
// Output: 92
```

---
 
### 5. Count total characters
**Real life:** Text length calculation
```js
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
ans:const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
// Output: 9
```
 
---
 
### 6. Combine words into a sentence
**Real life:** Message builder
```js
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
ans:const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
// Output: "Learning JavaScript is fun"
```

---
 
### 7. Count passed students
**Real life:** Result summary
```js
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
ans:const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);
// Output: 3
```
 
---
 
### 8. Calculate final balance
**Real life:** Bank account calculation
```js
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
ans:const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// Output: 1000
```
---
 
---
 
### 10. Build comma-separated string
**Real life:** Display values in UI
```js
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
ans:const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
// Output: "Pen, Book, Pencil"
```

