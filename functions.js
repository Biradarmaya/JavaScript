//.............1.anonymous function..........
//a function which does not have function name
// we can execute anonymous function bcz it does not have function name
//to exicute anonymous function 1.named function with expression,IIFE

//syntax of anonymous
// function{

// }
// ()

//.............2. named function................
//a function which a function name is called as named function 

function demo()
{
    console.log("hello this is named function");
}
demo();
demo();


//passing an aruments for the function
function test(name)
{
    alert(name+"  ganesh chaturthi");

}
test("happy");

//............3.function with expression.................
let a = function()
{
    console.log("this is function with expression function");
};
a();
//console.log(a());//undefined bcz of log statement


//...............4.first class function......................
//when we are using function with expression ,we are passing function as an value for the expression that value we call it as first class function


//...............5.arrow function...................
//to reduce the syntax we go for arrow function

//()=>(we call it as fat arrow)

let b=(a,d)=>{
    console.log(a+d);
  
};
b(10,20);



// let f=()=>{   //named to arrow

// }
// // demo1();

//first rule
let ArrFun=()=>
console.log("hello");
ArrFun();

//second rule

let ArrFun1=()=>{
    let festivalG="gannu";
    console.log(festivalG);
};
ArrFun1();

//third rule
let ArrFun2=()=>{
    let day="monday";
    return day;
};
alert (ArrFun2());

//fourth rule

let ArrFun3=()=>{
    let comngDay="wednesday";
    console.log(comngDay);

};
//console.log(ArrFun3());//undefined bcz of two log Statements
arrowFun=(a,b)=>{
    return a+b;
}
console.log(arrowFun(10,20));

let arrow

