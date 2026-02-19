// event -- page per koi pan action karo tene ek event rise karshe, page par click, hover, typing all are event
// event listener --- event nu reaction -- give reaction when click, doubleclick, hover, typing

// add event listener
// select --> event --> function --> what you change
// event.addEventListener("event_name", function(){})

// =============================================
// command event: click, input, change, submit, mouseover, keyup
// click
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("cs-body");
    console.log(btn.textContent)
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode"
    } else{
        btn.textContent = "Dark Mode"
    }
});

//input 
// how to know which is typed ?
let inp = document.querySelector(".text");
inp.addEventListener("input",(dets)=>{
    // console.log(dets);
    if(dets.data !==null){
        console.log(dets.data);
    }
});
//change -- When you change element state
let sel = document.querySelector(".sel");
let device =document.querySelector(".device");

sel.addEventListener("change",(dets)=>{
    console.log(dets.target.value);
    device.textContent =dets.target.value;
});

let box1 = document.querySelector(".outer_box");
let inp1 = document.querySelector(".color-inp");
let inp2 = document.querySelector(".border-inp");


inp1.addEventListener("change", (dets) => {
    box1.style.backgroundColor = dets.target.value;
});
inp2.addEventListener("change", (dets) => {
    box1.style.borderColor = dets.target.value;
});

//submit
let form = document.querySelector("form");

form.addEventListener("submit",(dets)=>{
    document.body.style.backgroundColor ="red";
});

//mousemove and mouseout
let box2 =document.querySelector(".box2");

box2.addEventListener("mousemove",()=>{
    box2.style.width ="500px";
})

box2.addEventListener("mouseout",()=>{
    box2.style.width ="100px";
})

//keyDown --> keyboard checker

//mouse move -- effect

//===============================
//event object:
//sel.addEventlistnner("change",(dets)=>{
// console.log(dets);==> dets -- that called event object });

//target ,type , preventDefault
//target --> that show element 
// type -->show Event Type
// preventDefault --> use fpr html- form --> prevent form to refresh and clean details


// Event Bubbling and Capturing
// Event Bubbling --> jena par event aave tena par listener na hoy
// to aapdu event tena parent par listener gotase ane aavu karta
// karta upar taraf move karshe

let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let most_inner = document.querySelector(".most_inner");

// outer.addEventListener("click", () => {
//     console.log("Outer Div Clicked");
//     document.body.style.backgroundColor = "skyblue";
// });

// inner.addEventListener("click", () => {
//     console.log("Inner Div Clicked");
// });

// most_inner.addEventListener("click", () => {
//     console.log("Most Inner Div Clicked");
//     document.body.style.backgroundColor ="red";
// });

// use case: make it to do list thing
// when you click on text that show strike using bubbling
// create list that show shopping things -- use css (text-decoration -> line-through)

let ul = document.querySelector("ul");

ul.addEventListener("click", (dets) => {
    // get current textDecoration style of clicked element
    let liStyle = dets.target.style.textDecoration;

    // toggle line-through
    if (liStyle === "line-through") {
        dets.target.style.textDecoration = "none";
    } else {
        dets.target.style.textDecoration = "line-through";
    }
});

// event Capturing ==> revece of event bubbling
// when you raise event then your event flow(propogation) ==> can run into two phase

// first phase ==> event can run to top level element to bottom level element (parent --> Child Element)
// second phase ==> event can run to raised element to parent element (child element --> parent)

// First --> first phase then second phase ==> but phase 1 is default off, you have to on that setting
// first phase --> capture phase
// second phase --> event bubbling

outer.addEventListener("click", () => {
    console.log("Outer Div Clicked");
    document.body.style.backgroundColor = "coral";
});

inner.addEventListener("click", () => {
    console.log("Inner Div Clicked");
    document.body.style.backgroundColor ="aqua";
});

most_inner.addEventListener("click", () => {
    console.log("Most Inner Div Clicked");
    document.body.style.backgroundColor ="maroon";
});

// phase 2 : child --> parent (most inner-inner-outer)
// true -- outer : phase 1 (true vali event run) : Parent -->
// child (outer(done)) Phase 2 (true vagar ni event run thai): child
// --> Parent (Most_inner --> inner)

// true -- outer, inner : phase 1 (true vali event run) parent
// --> Child (outer(done)--> inner (done)) Phase 2 (true vagar ni
// event run thai): Child --> Parent (Most_inner)


// use case :
// 1. security layer
// 2. check when event  bubbling is fail

// event and event lisnner and lisnner
// capture vs bubbling

// live character conter
let counter = document.querySelector("#counter");
let count =document.querySelector(".count");

counter.addEventListener("input",(dets)=>{
    console.log(dets.target.value.length);
    console.log(counter.value.length);

    let limit = 10 - counter.vlaue.length;

    if(limit<0){
        alert("Limit Reached");
        counter.Disabled =true;
    }else{
        count.textContent= limit;
    }
});s