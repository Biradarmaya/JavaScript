//dom methods
//1.get elementbyID
//it return an object which element having an  id as well as value as an document object
//it is used to target single html elements

let elementbyId=document.getElementById("demo");
console.log(elementId,typeof elementId);

//innerHTML(property of dom)
//which displays the text  by taking the bahavior of specific tag
//elementId.innerHTML="<h1>i want to change</h1>";
 
//innertext(propertyof dom)
  // it displays text but does not take behavior of tag
  //elementId.innerText="<h1>i too want to change</h1>"

  elementbyId.innerText="we tech";

  //styling 




  //2.get element by class name
//it return an object of html document which is targets the elements having the class of same value.
//it return  in the form of html collection bcoz it targets the element in a decendent as well as in normal way
let a=document.getElementsByClassName('test');
// let a=document.getElementsByClassName('test')[2];

console.log(a,typeof a);
a[2].innerHTML="changed";

//to style the class element
a[0].style.backgroundColor="yellow";
a[1].style.fontSize="24px";
a[0].style.color="blue";

//3.get element by tag name
//it returns the object  by the element which is having only tag name.         
//it return interms of html collection bcoz it targets the document which is having multiple of same tag.
b=document.getElementsByTagName('article');
console.log(b);
b[0].innerText="sunday";

b[0].style.color="red";