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


