// operators
// arithmetic comparison , logical , asssignment ,unaray ,ternary
// Arithmatic:
// + ,-,/,*,**,%
// + --> Add and concatation
// ex. 1+2 --> Add 
// "user" +"name" --> concat
// 5+"5"--> concat ,5+5 --> Add
// -
// ex .2-1
//  /,*
// ex. 240/2 ,25*2
// % (modules)(sheshfal)(reminder)
// ex.12%4 --> 0
// ex. 9%2 --> 1
// ** (square)(expontation)
// ex. 2**3 --> 8

//comparison(ans: true,false)
// ==
//ex. 12 ==13 ,12== "12"(don't check type,only check value, not strict comparsion)
// !==
// ex.12 ! =13 (reverse of = ,not strict comparision)
// !==
// ex.12! == "12"(reverse of ===)
// >=
// ex.13<= 13
// <
// ex.12 <113 ,12 < 9,22<22
// <=


// assignment
// =
// give a vlaue assignment oprator 
//ex. let a=12
//+=
//ex .a += 3;(add value into old value and save it into a)
// *=
//ex .a -=4 ;(sustract value info old value and save it into a)
//*=
// ex .a *=2;
// /=
// ex. a/=2;
//%=
// ex. a %2 ;(give reminder)


// logical
//&& (And)
// ex.true && true -->true 12<13 && 14<15 --> false
//true && false --> false
// false && false --> false

//|| (or)
// ex. true || true --> true 
//false || true --> true 
//flase || false --> false

// !(NOT)
//ex. ! true --> false
// !falsw --> true 
//!12 --> false --> !!12 -->true

//unary operator
//+ --! typeof ++ --
//+
//convert string to number 
// ex . +"5" --> 5
// + "name"--> NaN
// "5" + 5 -->55
// +"5" + 5 --> 10
//-
//ex. -5
//!
//ex.!12 --> false
//typeof
//++
//ex. let a=12
//a++ -->12 //post ex.a++ a=> 25
//++a --> 13 // pre ex. a++ + a => 26
//--
// ex. let a=3;
//a-- 
//a++


//ternary 
//? :
//condition ? true thashe to print thashe :flase thashe to print thashe
// let a= 12>13 ? console.log ("true"): console.log ("false");

//typeof null -->object
//typeof []--> object ,let a=[]; a intsanceof array -->true 
// instanceof --> check type of reference data type // don't use typeof for reference data type 
// typeof NaN --> number
//typeof --> primitive data type mate use karvo
//instanceof -->reference data type mate use karvo

// example
let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}