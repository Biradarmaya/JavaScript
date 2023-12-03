// index.html

let myArray=[
    1,
    "String",
    true,
    false,
    function a() {},
{},
null,
undefined,
100n,
];
console.log(myArray);
 let b={};
let array=[];
console.log(array);
console.log(typeof array);

//how to chck  the array
console.log(Array.isArray(array));  //true
console.log(Array.isArray(b));  //false

console.log(array instanceof Array); //true
console.log(b instanceof Array); //false

//how to add an values to an array
array[0]=100;
array[48]=true;
array[100]="thursday";
console.log(array);

let boost=[100,200,300];
console.log((boost[3]=400));
//how to check length of an array
console.log(boost.length);
console.log(boost);


//how to fetch an array value
console.log(boost[2]);

//how to update an existing array value
console.log((boost[3]="four hundred"));
console.log(boost);

console.log(delete boost[0]);
console.log(boost);

//array methods

//1..............push..................
let myPet=["xya","waste","fellow",true];
console.log(myPet);


//push
//to add the value from behind an existing array
//push effects the original length of an array

// pushArray=myPet.push("definately");
// console.log(pushArray);
// console.log(myPet)



// 2........unshift..........................
//unshift adding the values from the starting of array
//unshift effects the original length of an array

// let unshift=myPet.unshift(840);
// console.log(unshift);
// console.log(myPet);



//3..........pop...............
//pop method removes an value from the end of an array
//pop does  not accepts any arguments
//pop effects the original length of an array

// let popAry=myPet.pop();
// console.log(popAry);
// console.log(myPet);


//4.......shift....................
//shift method will removes an values from the begining of an array
//shift does not accepts any arguments
//shift effects the original length of an array

// let shiftAry=myPet.shift();
// console.log(shiftAry);
// console.log(myPet);


//5..................slice....................
//slice is used to extract an place of value from an existing array
//it accepts one argument or two argument(includes first one ,excludes second one)
//it does not effects original length of an array
//minus value in an argument indicates that values from the end

// let sliceAry1=myPet.slice(-3,-1);
// let sliceAry=myPet.slice(1,2);
// console.log(sliceAry1);
// console.log(myPet);

//it creates an shallow copy from an array
// let shallowCopy=myPet.slice();
// console.log(shallowCopy);
// console.log(myPet);[]

//6........splice..............
//it accepts one argument or two argument(includes first one,excludes second one (arg),,excludes second one)
//or three Arguments (first one index, second how many  values want to remove from that index, third-elements to add from the removes element index)
//it effects original length of an array
let spliceAry=myPet.splice(0,4,"hello",2,3,4);
console.log(spliceAry);
console.log(myPet);     //which not extracted from splice remaing will print 

let array11=[30,60,90,128,150];
// let splice=array11 .splice(0,3); //when it is 0 in the first argument it includes last argument
// console.log(splice);

// if splice has three arguments-1st one indicates inex 2nd one how many elements wants to be removed element ...3rd-from that removed elemt index how many elements want to add 

let splice3=array11.splice(1,3,4,5,6, 2,3);
console.log(splice3);
console.log(array11);

//find
 let array9=[10,20,30,55,43,123];

 //find method in java script returns the first  array which satisfy the condition

 //find is an hof
 let findA=array9.find(function (ele)
 {
    return ele>50 && ele<100;
 });
 console.log(findA);

 //findindex
 //findindex in an js will return the index of an array element which  satisfies the condition
 let findIndex=array9.findIndex(function(index)
 {
    return index<3;

 });
 console.log(findIndex);

 //flat
 //flat in js will nested array into an single array

 let nest=[100,[200,900,[540,[123]],70]];
 let flat=nest.flat(3);
 console.log(flat);

 //concat 
 //concat in js will add or merge more than two arrays
 let concatA=array11.concat(array9,nest);
 console.log(concatA);

 let result =["javascript","is","beautiful","language"];
 let join =result.join("  ");
 console.log(join);
 console.log(typeof join);

 let rev=[30,40,50];
 let str1=["aa","bb"];
 let res=str1.reverse();
 console.log(res);

 //sort
 //return -1:dont swap;
 //return 1:swap;
 //return 0:current place
 //asending
 let numbers=[10,100,110,22,230,40,540];
 let sort=numbers.sort(function(cur,next){
    if (cur<next){
        return 1;
    }else{
        return  -1;
    }
 });
 console.log(sort);
 //descending
 let sort1=numbers.sort(function(cur,next){
    if (cur<next){
        return -1;
    }else{
        return 1;
    }
    });
 console.log(sort1);

let sort3=numbers.sort((cur,next)=>cur-next);
console.log(sort3);

let sort4=numbers.sort((cur,next)=>next-cur);
console.log(sort4);

 let ss=["xyz","abc","bca"];
 let sort2=ss.sort();
 console.log(sort2);


 //example
 //let a=[10,2,3,4]
//  let b=a.sort((x,y)=>x-y)
//  10-2=+ number swap
//  2,10,3,4
//  again same 10-3= swap
//  2,3,10,4


//some
//some method in js return true when some elemnets of an array will satiesfies the given condition 
let number=[330,440,110,550];
let some=number.some(function(ele){
 return ele>500;

});
console.log(some);

//every array method in js will true when every element in an array will satiesfies the condition
let every=number.every(function(ele){
    return ele>500;

});
console.log(every);

//map filter reduce(interview point of question)
//data transformation method

//map
//map method is used to loop an given array to a new array with transformed data
let birthyear =[1999,2000,2001,1998,2002];
let map=birthyear.map(function(ele){
    return 2023-ele;
});
console.log(map);

for(let values in birthyear){
    console.log(values);

}
let age=[];
for(let values of birthyear){
    let ages=2023-values;
    age.push(ages);
}
console.log(age);

//filter
//filter method in js filter the each array element with a given condition

let transaction=[2000,-100,-40000,1000];
let deposit=transaction.filter(function(ele){
    return ele>0;
});
console.log(deposit);

let withdrawal=transaction.filter(function(ele){
    return ele<0;
});
console.log(withdrawal);

let w=transaction.filter(()=>{

})

//reduce 
// reduce method in js reduce the or boils the given array elements into an single value
//the result value stored in accumulator
let numb=[33,20,50,66,74];
let reduce=numb.reduce(function(acc,ele){
    return acc+ele;
},0);
console.log(reduce);

console.log(null+null);

//destructuring array

let newArray=[34,44,79,84,74];
let[a,g,c,d,e,f]=newArray;
console.log(a,g,c,d,e,f);

let details=["john","fransisc",34,"female"];
let[firstname, ,age1,gender="male"]=details;
console.log(firstname);
console.log(age1);
console.log(gender);

function toResult()
{
    return["suresh","ramesh","mukesh","nandini","narmada"];

}
let[result3,result1,result2]=toResult();
console.log(result1,result2,result3);


//spread operation
//spread operator in js extract all the array elements and desplayed individually

let spread=[300,400,500,600,700,200];
// let fspread=[
// spread[0];
// spread[1];
// spread[2];
// spread[3];
// spread[4];
// spread[5];
// ];
// console.log(fspread);

console.log(...spread);

let str10="hello";
console.log(...str10);

let numii=[1,2,3,4];
console.log(...numii);

function addition(p,q,r,s){
    return p+q+r+s;
}
console.log(addition(...numii));

let aa=[20,40,50];
let bb=[10,30,60];
let cc=[...aa,...bb];
console.log(cc);  

//rest operator
//rest in js collects remaining elements of an array

let rest=[90,180,30,60];
console.log(...rest);

let[a1,b1,...other]=rest;
console.log(a1,b1,other);

let next=[2,3,4,[50,60,],[80,90,[50,[80,85],105]]];
