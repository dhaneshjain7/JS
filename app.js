/*
let str="apple";
if((str[0]=="a") && (str.length>=3)){
    console.log("string is good");
}else{
    console.log("string is not good");
}
*/


/*
console.log("hello world! ");
console.log("this is dhanesh jain ");
let a=10;
let b=5;
console.log("sum is:",a+b);

let age=10;
let newAge=age++;


let pencilPrice=10;
let erasorPrice=5;
//console.log("the total price is :" ,pencilPrice+erasorPrice,"Rupees.");

//let output="The total price :"+(pencilPrice+erasorPrice)+"Rupees.";
//console.log(output);

//output variable is too large so we use template litrals
let output=`the total price is: ${pencilPrice+erasorPrice} Rupees.`;
console.log(output);
*/

/*
let day=1;

switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;  
    case 3: 
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;  
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}
*/

//conditional statement

//if statement
/*
console.log("before my if statement");
let age=21;
if(age>=18){
    console.log("you can vote");
}
console.log("after my if statement");

//practice Q traffic light
let color="green";

if(color=="red"){
    console.log("stop!light color is red");
}if(color=="yellow"){
    console.log("slow down, light color is yellow");
}if(color=="green"){
    console.log("go, light color is green");
}
*/

//ALERT AND PROMPT
/*
alert("something went wrong!");
console.log("alert done");
console.error("this is an error message");
console.warn("this is a warning message");


let firstName=prompt("enter your first name");
console.log("your first name is:",firstName);
*/

//string

/*
let msg="          hello          ";
let newMsg=msg.trim();
console.log("after trim:",newMsg);
newMsg=newMsg.toUpperCase();
console.log("after upperCase:",newMsg);
console.log(msg);   //same print hoga koi change nahi hoga
*/


/*
let password=prompt("set your password");
let newPass=password.trim();   //password.trim ek new string banakar dega
console.log(newPass); //password ke spaces trim ho jayenge
//console.log(password);    //password ke spaces trim nahi honge 
*/ 



let name="apna college";
console.log(name.slice(0,4));
console.log(name.slice(-7));     // prints end ke 7 letter
console.log(name.slice(name.length-7));
let newName=name.replace("apna","Our");
console.log(newName);       


let info=["dhanesh",21,98];
let empArr=[];   //empty array
console.log(info[0]);    //print dhanesh
console.log(info[0][0]);    //print d

let cars=["audi","bmw","xuv","maruti"];
console.log(cars);
cars.unshift("toyota");
console.log(cars);



//multiplication table
let n=prompt("write your number");
n=parseInt(n);         //The parseInt() function in JavaScript is primarily used to parse a string argument and convert it into an integer. 
for(let i=n;i<n*10;i=i+n){
    console.log(i);
}





//FUNCTIONS

/*
function sum(a,b){
    console.log(a+b);
}
sum(sum(1,2),3);                // because the sum function uses console.log to display the sum but does not explicitly return a value.
// understand step byu step
// 1 a becomes 1, b becomes 2.
// 2 console.log(a+b) executes, printing 3 to the console.
// 3 Since there is no return statement, the function implicitly returns undefined.
function calAvg(a,b,c){
    let avg=(a+b+c)/3;
    return avg;
}

console.log(calAvg(10,20,30));  


function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
printTable(5);

function Sum(a,b){
    return a+b;
}
console.log(Sum(Sum(1,2),3));

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    return sum;
}

let str=["hi","hello","bye","!"];

function concat(str){
    let result="";

    for(let i=0; i<str.length;i++){
        result +=str[i];
    }
    return result;
}

*/


/*
//this keyword 
const student={
    name:"dhanesh",
    age:21,
    eng:95,
    math:93,
    phy:96,
    getAvg(){
        console.log(this);     //to print this
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks=${avg}`);
    }
}

//function getAvg(){
  //  console.log(this);        //call the window object kyo ki iske andar kuch nahi hai
//}




//arrow function 
const sum=(a,b)=>{
    console.log(a+b);
};


const cube=(n)=>{
    return n*n*n;
};

const pow=(a,b)=>{
    return a**b;
};

const hello=()=>{
    console.log("hello world");
};

const mul=(a,b)=>(a*b);   //implicit return


//set Timeout
console.log("Hi there!");

setTimeout( ()=>{
    console.log("Apna College");
}, 4000);
console.log("Welcome to");

//set Interval
let id = setInterval(()=>{
    console.log("Hello world");
},2000);
console.log(id);      //hello world loop me print hota rahega jab tak clear interval nahi kar dete clearInterval(id); se
*/




//this with arrow function

/*
const student={
    name:"aman",
    marks:95,
    prop:this,    //global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=>{
        console.log(this);   //parents scope
        return this.marks;
    },
    getInfo1:function(){  //arrow function
        setTimeout(()=>{
            console.log(this);  //returns student  inbuilt function ke sath arrow function ko use karte hai toh sahi this ko access kar rahe hote hai 
        }, 2000);
    },
    getInfo2:function(){
        setTimeout(function(){   //normal function
            console.log(this); //returns window 
        }, 2000);
    },
};  

//practice question

const square=(n)=>(n*n);
console.log(square(11));

//practice Q
let id=setInterval(()=>{
    console.log("Hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran"); //isse pata chal jayega hume ki khatam ho gaya ab 
},10000);   // print hote jayega jab tak 10 sec nahi ho jate yaha par 5 bar


*/


//array methods 

//for each 

/*
let arr=[1,2,3,4,5];
let print=function (el){
   console.log(el);
};
arr.forEach(print);

*/

// same output as above
/*
let arr=[1,2,3,4,5];
arr.forEach(function (el){
    console.log(el);
});
*/


/*

let arr1=[
    {
        name:"dhanesh",
        marks:98,
    },
    {
        name:"shradha",
        marks:94.4,
    },
    {
        name:"dhruv",
        marks:92,
    }
];

arr1.forEach((student)=>{
    console.log(student.marks);
})

//map

let num=[1,2,3,4];
let square=num.map((el) =>{
    return el*el;
});
console.log(square);

//filter
let nums=[1,2,3,4,5,6,7,8];
let ans=nums.filter((el) =>{
    return el%2==0;  //for even->true  odd->false
});
console.log(ans);

//reduce
let num2=[1,2,3,4];
let finalVal=num2.reduce((res,el)=>{
    console.log(res);
    return res+el;
});
console.log(finalVal);

//maximum in an array
let arr2=[1,4,2,5,7,9,6];
let max =arr2.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max);
*/



//practice q
/*
let nums=[10,20,30,40];
let ans=nums.every((el)=>el%10==0); //return true if all the elements satisfy the condition

console.log(ans);
*/

//practice q
/*
let nums=[10,20,30,40,5];
let min=nums.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);
*/

//same q as above but this time we are making function of this
/*
function getMin(nums){
    let min=nums.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
    return min;
}
let nums=[10,20,30,40,5];
*/

//default parameters
/*
function func(a,b=2){
    //do something
}
*/

/*
function sum(a,b=3){
    return a+b;
}

sum(2);   //5
sum(1,3);    //4
*/

//spread
/*
let arr=[1,2,3,4,5];
let newArr=[...arr];

let chars=[..."hello"];

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let nums=[...odd,...even];
*/


/*
const data={
    email:"ironman@gmail.com",
    password:"abcd",
};

const dataCopy={ ...data,id:123, country:"india"};

let arr=[1,2,3,4,5]; //val
let obj1={...arr};  //obj->key:val

let obj2={..."hello"}
*/


//rest
/*
function sum(...args){   //arguments
    for(let i=0 ;i<args.length;i++){
        console.log("you gave us: ",args[i]);
    }
}
sum(1,2,3,4,5,6,7,8,9);
*/

/*
function min(a,b,c,d){
    console.log(arguments);  // argument define nahi kiya fir bhi error nahi de raha koi ki yeh apne app by default isi me storekar deta hai yeh argumnet koi array nahi hai yeh collection hai toh yaha koi bhi array method nahi lagenge
}
    */

/*
function sum(){
    return arguments.reduce((sum,el)=>sum+el);   //output nahi dega kyoki yeh array nahi hai or humne reduce use kara jo ki ek array method hai 
}
*/  

//agar hume array function use karna hai toh pehle array me convert karna padega jo ki rest kar deta hai array in the form of arrray hi bind kar ta hai 

/*
function sum(...args){
    return args.reduce((sum,el)=>sum+el);
}
    */


/*
function min(msg, ...args){   // 2 argument liye hai yaha
    console.log(msg);         //ese 2 arg leo toh jese msg pehle hi lelo kyoki arg collect karne ke bad error aa jata hai syntax sahi nahi hota toh 
    return args.reduce((min,el)=>{
        if(min>el){
            return el;      //in console write     min("minimum is ",1,2,3,4,9,35,6,7);

        }else{
            return min;
        }
    });
}
*/

//destructuring

/*
let names=["tony","bruce","peter","steve","abc","xyz","pyq"];
//let winner=names[0];
//let runnerup=names[1];
//let secondRunnerup=names[2];

let[winner,runnerup,...others]=names;    //combined destructuring and rest
*/

//destructuring objects

/*
const student={
    name:"karan",
    age:14,
    class:9,
    subject:["hindi","english","maths","science"],
    username:"karan@123",
    password:"abcd"
};

//let username=student.username;
//let password=student.password;

//let{username,password}=student;

let{username:user,password:secret,city="Mumbai"}=student;
*/




































































































































































