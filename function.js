// default parameters
function def(v1 = "default1", v2 = "default2") {
    console.log(v1, v2);
}
def();

function buyNow(product = "product name", price = "product_price") {
    console.log(product, price);
}
buyNow("mobile");

// rest parameter
// ...rest last parameter hota hai aur multiple values ko array me leta hai
function abcd(v1, v2, v3, ...numbers) {
    console.log("rest:", v1, v2, v3, numbers);
}
abcd(1,2,3,4,5,6,7,8,9,10);

// return or early return
function temp_fnc(){
    if (10 > 9) return "true";
}
console.log(temp_fnc());

// first class function

// function expression
const cart5 = function(product, price){
    console.log(`adding ${product} at ${price}`);
};
cart5("function expression - S25 ultra", 69000);

// arrow function
const cart6 = (product, price) => {
    console.log(`adding ${product} at ${price}`);
};
cart6("arrow function - S25 ultra", 69000);

// function passed as argument
function temp_fnc2(params){
    params();
}
temp_fnc2(() => {
    console.log("second function");
});

// function returned from another function
function outer(){
    return function(){
        console.log("returned function");
    };
}
//function can be returned from other functions

function temp_fnc3(){
    return function fnc4(){
        console.log("function4");
        // return "function can be returned from other function"
    }
}
console.log(temp_fnc3()());

//higher order function (HDF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athva acpect kare function ek function params ma)

//function abcd (val){val ();}
//--> abcd (function(){console.log("hello")})
//function abcd (val){} --> higher order function 

//function abcd {}{return function(){}} abcd (){}--> higher order

// pure vs impure function
//pure functon --> function je same input par same output aapse ane koi bahar na state ne modify na kare(pure function--> je function bahar na state ne modify na kare)
let temp_a =20;//state
function temp_change(){
    return"hello";
} // --> pure function 
console.log(temp_change());

console.log("value of temp_a before change:",temp_a);

//impure function --> function je same input par different output aapse athva bahar na state ne modify kare (imprue function --> je function bahar na state ne modify kare)
function temp_change1(){
    temp_a++;
}// -->impure function
temp_change1();
console.log("value of temp_a after change",temp_a);
temp_change1();
console.log("value of temp_a after change",temp_a);
temp_change1();
console.log("value of temp_a after change",temp_a);
temp_change1();
console.log("value of temp_a after change",temp_a);
// closure function 
//function je potana parent ufnction na variables ne access kari shake(return thava valo function use karshe parent function na koi variable)(function within function)
function outer(){
    let outer_var =50; //parent function variable 
    function inner(){
        outer_var--;
        console.log(outer_var); //child function consolelog
    }
    return inner();
}
console.log(outer())

//lexical scope --> nested function can access variables declared in thier outer scope
function outer1(){
    let temp_outer ="outer function variable";
    function inner1(){
        let tmp_inner ="Inner function variable";
        console.log(temp_outer);
        function most_inner(){
            console.log("most_inner function output",temp_outer);
            console.log("most_inner function output",temp_inner);

            function most_most_inner(){
            console.log("most_inner function output",temp_outer);
            console.log("most_inner function output",temp_inner);
             console.log("most_inner function output",temp_most_most_inner);
            }
            most_most_inner();
        }
        most_inner();
    }
    inner1();
}


// IIFE- immediatly invoked function expression 
(function(){})();//function je declare karta l call thai jay 
(function temp_IIFE(){
    console.log("IIFE function")
    }
)();

//hoisting in function 
temp_abc();
function temp_abc(){
    console.log("hosited Function")
}

//aero function
let temp_abc1 = () =>{
    console.log("Arrow function ")
}
temp_abc1();

// Function Declaration
hello(); //  Works

function hello(){
    console.log("I am hoisted fully");
}


// ex :1
// Function Expression
// bye();Error if uncommented

var bye = function(){
    console.log("I am NOT fully hoisted");
};

//ex : 2
greet();

function greet(){
    console.log("Hello!");
}

// ex : 3
const add = (a, b) => {
    return a + b;
};
console.log(add(5,3));

// ex : 4
function welcome(name){
    console.log("Welcome " + name);
}

welcome("user");

// ex : 5
function temp(a, b, c){
    console.log(a, b, c);
}

temp(1, 2);

// ex : 6
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}

temp_user();

// ex : 7
function number(...numbers){
    console.log(numbers);
}

number(1, 2, 3, 4, 5);


//ex : 8
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total += val;
    });
    return total;
}


// ex : 9
 let sumtotal = calculateTotal(10, 20, 30, 40, 50);
  console.log(sumtotal);

  function checkAge(age){
      if(age < 18){
          return "Too Young";
      }
      return "Access Granted";
  }
  console.log(checkAge(16));
  console.log(checkAge(21));


// ex : 10 
function f(){
    return;
}

console.log(f()); // undefined
