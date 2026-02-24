//local storage API : setItem ,getItem ,RemoveItem ,clear
//localstorage --> save that data into browser's storage ,after close browser data wasen't deleted
//(brwser nu aevu storage ke jema data store thai chhe and browser band thai jay to pan data delete thato nathi)
//~ 5 MB storage 

//set items s
//localstorage.selectItem("key",value)
localStorage.setItem("name","test_user")

//getItems
//localstorage.getItem("key_name")
let user = localStorage.getItem("name")

//removeItem
localStorage.removeItem("name")

//update item 
localStorage.setItem("email","user@user.com");
localStorage.setItem("name","user");
localStorage.setItem("age","10");
localStorage.setItem("cart","");


//clear 
sessionStorage.clear();

//stornig/retrivnig string vs json
//save as string into localsotrage and sessionstorage --try to save array and string 
localStorage.setItem("users",'["demo","test","test1","demo2"]');
let users = localStorage.getItem("users");

//JSON.stringify
//JSON parse

localStorage.setItem(
    "demo",
    JSON.stringify({name : 'demo',age : 10 ,email : 'demo@a.com'}),
);
let demo =JSON.parse(localStorage.getItem("demo"));

//sessionstorage API
//session storage --> save that for temopariry time when you close tab delete was deleted 
//(aa storage data ne temporarily time mate save kari ne rakhe chhe,jyre pn tab close karsho tyre teni sathe data pan delete thai jai chhe)
// ~ 5Mb storage

//setItem 
sessionStorage.setItem("email","test@test.com");

//getItem
let email= sessionStorage.getItem("email")

//removeItem
sessionStorage.removeItem("email")


//basic cookie structure (manual key = values;)
//cookie API :
//~ 4kb storage
document.cookie ="email = demo@gmail.com";

//max age 
document.cookie ="user =demo; max-age =10"//10 sec

//date and time 
document.cookie ="age =10; expires =wed, 20 feb 2026 12:00:00 GMT";