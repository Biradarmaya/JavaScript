// function demo(){
//     let a=200;
//     let b=300;
//     let r=400;
//     let q=500;

//     function mp(){
//         console.log(a);
//         console.log(b);

//           function child(){
//             console.log(r);
//             console.log(q);
//            }
//          child();


//     }mp();

// }demo();

var a=100;
let obj={
  id:101,
  name:"maya",
  obj:function(){
    console.log(this.a);
  }
}