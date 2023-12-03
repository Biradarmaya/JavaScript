let obj={
    fruit:"apple",

};

let myobj={
    veg:"cucumber",
    color:"green",
};
let yourobj={
    festival:"ustava",
};

yourobj.__proto__={
    flower:"lotus",
};

console.log(obj);
console.log(myobj);

console.log(obj.fruit);


obj.__proto__=myobj;
myobj.__proto__=yourobj;

console.log(obj.veg);
console.log(obj.color);

console.log(obj.festival);
console.log(myobj.festival);


