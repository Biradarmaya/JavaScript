//  let btn=document.querySelector('form') ;
// btn.addEventListener('submit',()=>{
//     let idName=document.getElementById('name').value ;
//     let pass=document.getElementById('pass').value;
//     let email=document.getElementById('email').value;
//     //e.preventDefault();
//     console.log(idName,pass,email);
// })

//prevent default
// normally when we submit the fo data has to go to data base in order to prevent the data to go to some where else we need prevent default method to show in the user interface

// it is method which prevents the clients data to go to the server and displays in the user interface

let btn=document.querySelector('button');
btn.addEventListener('click',()=>{
let idName=document.getElementById('name').value ;
    let pass=document.getElementById('pass').value;
    let div=document.querySelector('div');
    div.innerHTML=`${idName} and ${pass}`;
    div.style.color="red";
    div.style.fontSize="50px";
})