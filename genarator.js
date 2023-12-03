function demo()
{
    return "hello";
}
let d=demo();
console.log(d)

// the use  of genarator function 
//to make efficient to iterate the values to make asynchronous

//the syntax of genarator function
function test()
{
    console.log("this is normal function")
}
test()

//generator function is an function which returns an generator object that is stored in one variable



// function*generatorFun()
// {
//  console.log("this is generator function")
// }
// let generator=generatorFun()
// console.log(generator)


 function* generatorFun()
 {
  yield 32;       //yield is a keyword which holds the generatorfun values
  yield "hello";
  yield 46;
 return "cricket"
  yield 50;
  yield "mahi";

}
let genarator=generatorFun()
console.log(genarator.next())
console.log(genarator)
// console.log(genarator.next())
// console.log(genarator.next())
// console.log(genarator.next())
// console.log(genarator.next())
// console.log(genarator.next())


//print the values of generator by using for of
for(let name of genarator)
{
    console.log(name)
}