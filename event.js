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