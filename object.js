//object vs array
//objects -- when you want to show all data based on one entity (ek j entity mate all data jota hoy)(ex.one user data)
//array -- when you want to show entity (ex. all users)
// let user_data =[{name:"abc",email:"test@gmail.com"},{name:"def"},{name:"abc1"},{name:"ABC"}]

//create
//variable ={}
// key :value --> key- value structure
let user ={
    name:"test",
    email :"test@gmail.com",
    roll_no: 70,
} ;

//access (dot vs square notation)
//variable_name.key_name;
user.name;
user.email;
//user.first-name;
//variable_name['key'];
//user['name']
//user[name]
let demo1="name"
user[demo1]//--> convert into name (demo ='name')-->output:test

//Nesting and deep access
const user1 ={
    name:"test",
    address:{
        city :"surat",
        pin :395009,
        locations:{
            lat :24.2,
            lng :77.4,
        },
    },
    email:"test@gmail.com",
}; // -- nested object
user1.address.locations.lat; // -->deep access
//user1.address.location.lng;

//object destructuring:
let {lat,lng}=user1.address.locations;
let{name,email,address}=user1;
let{city}=user1.address;
let {lat:abc_lat}=user1.address.locations;
//destructuring and rename variable name

let demo={
    first_name :"demo",
    last_name : "user",
    age : 45,
    email :"test@gmail.com",
};

//looping (for-in loop)
//for (variable name in object_name){}
for(const key in demo){
    // console.log(key);
    console.log(key,":",demo[key]); //--log whole object
}

//cpying objects: spread ,object.assign,deep-clone 
//spread
// let user_data ={...demo};
let user_data ={gender:"male",role:"user",...demo}//add key -value and copy object 
//use case : state update
//const user ={
//name:"amit",
//age:30
//};

//const updateuser ={
// ...user,
// age:31 
//};

//console.log(updateduser);

//object.assign -- copy and add keys-value
let user_data_assign = Object.assign ({},demo); // -nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number:9727150530},demo); //- add and copy
//use case : default settings + user settings merge 
// const defaultsetting ={
//theme :"light",
//language:"en"
//};

//const userSettings ={
// theme : "dark"
// };

//const finalsettings = object.assign({},defaultSettings,userSettings);

// object.assign vs spread 
//object assign() -- method -- ES5 old version ,less used
// spread --oprator --state updated ,most used in react application , clean code


//deep clone 
let temp_user1_clone ={...user1}
// user_1 clone.address.city = "valsad" --> that will change value of user1 too
// issue : when you clone & copy nested object using spread or object. assing into new variable pass only refrence not copy 
// (jyre tame nested object (parent obj.)spead na upyog thi copy karo tyre nested obj.(child obj.)reference pass karshe -- value copy thashe nahi)
// how to clone that --use deep clone 
//first convert your object to string
// json -- javascript object Notation 
//json.stringify(obj._name) -- convert object into string 
// JSON.parse (stringify_object) -- convert string to object 
let clone_user1 = JSON.parse(JSON.stringify(user1))
//deep clone = completely new memory 
// use case :
// real time use:
// API response handling 
// avoid data mutation bugs

//object.key -- add keys into array formate 
let key_arr = Object.keys(demo);
// use case : User profile form validation 
// ex. website par thi user form ma data add kare  chhe ane te data backend pase object formate ma aave chhe 
//const userprofile ={
// name : "rahul",
// email: "rahul@gmail.com",
// age : 25
//};
// // now check how many field user fill up 
// const keys = object.keys (userprofile);
//console.log(keys);
//console.log (keys.length);

// object.entries -- add key and value into array formate
// give array of arrays 
let key_value_arr = Object.entries(demo);
// use case : display user details dynamically (UI)
// ex. backend give you data into object formate 
const user3 ={
    name : "priya",
    city : "Ahemdabad",
    role : "admin"
};

//print key and value both in profile page 
Object.entries(user3).forEach(([key,value])=>{
    console.log(`${key}: ${value}`);
});

//object.entries (user) ==> convert into arrays 
// foreach ==> array loop

// optional changing ,computed properties
// user1.address.location.lng ;
user1?.address?.location?.lng; // -- ?optional chaining
//use case:
//without optional chaning -> app crash 
// backend data incomplete 
// API response safety 
// const apiResponse ={
    // user:{
        //profile:{
          //  name:"neha"}
          // }
          // }
          // };
// console.log(apiresponse.user?.profile?.name);
// console.log(apiresponse.user?.address?.city);

// ---------------------------------------------
//computed properties
let role = "admin";
let user2 ={
    name : "test",
    age :26,
    email : "test@gmail.com",
    address:{
        city :"surat"
    },
    [role]:"test"
}
//use case :Dynamic object keys 
// const fileldName ="email";
// const user ={
// name: "ravi",
// [filedName]:"ravi@gmail.com"
//};
//console.log(user);