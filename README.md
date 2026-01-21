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
 

<title>JavaScript Operators – All Examples</title>
</head>
<body>

<h1>JavaScript Operators – All Examples</h1>

<script>

Example 1 – AND (&&)
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Example 1: Both are greater than 5");
}
<p> WHY: Both conditions are true</p>


Example 2 – OR (||)

let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Example 2: Access granted");
}
<p>WHY: At least one condition is true</p>

Example 3 – NOT (!)   
let temp = 35;

if (!(temp > 30)) {
  console.log("Example 3: Hot day");
} else {
  console.log("Example 3: Pleasant day");
}
 <p>WHY: temp > 30 is true → !true = false → else runs</p>


 Example 4 – Truthy / Falsy
let a = 0;

if (a) {
  console.log("Example 4: Truthy value");
} else {
  console.log("Example 4: Falsy value");
}
<p>WHY: 0 is a falsy value in JavaScript</p>


Example 5 – Ternary Operator
let score = 78;

let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" : "D";

console.log("Example 5: Grade =", grade);
<p>WHY: 78 >= 70 → Grade C</p>



 Example 6 – Nested Ternary
  
let points = 120;

let status =
  points >= 100 ? "Gold" :
  points >= 50 ? "Silver" : "Bronze";

console.log("Example 6: Status =", status);
<p> WHY: 120 >= 100 → Gold</p>


Example 7 – AND with Ternary
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("Example 7: Access =", access);
<p> WHY: AND requires both true → false</p>


Example 8 – Post Increment
let a1 = 5;
a1++;
console.log("Example 8:", a1);
 <p>WHY: Value increases after execution</p>


Example 9 – Pre Increment
let a2 = 8;
++a2;
console.log("Example 9:", a2);
<p> WHY: Value increases before execution</p>



Example 10 – Post Increment Assignment
let b1 = 4;
let c1 = b1++;
console.log("Example 10:", b1, c1);
<p> WHY: c1 gets old value (4), b1 becomes 5</p>


Example 11 – Pre Increment Assignment
et b2 = 4;
let c2 = ++b2;
console.log("Example 11:", b2, c2);
<p> WHY: b2 increments first → both are 5</p>


Example 12 – Post Decrement
let m = 10;
console.log("Example 12:", m--);
console.log("After decrement:", m);
<p> WHY: First prints 10, then decreases to 9</p>


Example 13 – Mixed Increment
let n = 5;
let result = n++ + ++n;
console.log("Example 13:", result);
<p> WHY: 5 + 7 = 12</p>


Example 14 – Corrected Function Increment
let likes = 100;

function likePost() {
  return ++likes;
}

console.log("Example 14:", likePost());
console.log("Total likes:", likes);
<p>WHY: Pre-increment increases before return</p>



Example 15 – Post Decrement Comparison
let count = 5;

if (count-- === 5) {
  console.log("Example 15: Matched");
} else {
  console.log("Example 15: Not Matched");
}
<p> WHY: count-- returns 5 first, then decreases</p>

</script>

</body>
</html>
