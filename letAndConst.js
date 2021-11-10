
//you can reinitialize 
//but you cant redeclare 

// let varName;
// console.log(varName);
// varName = 10;
// varName = 20;
// console.log(varName);
// let varName;

// cannot be redeclared when used let

// let babyAge = 1;
// let isBirthday = true;

// if (isBirthday) {
// 	let babyAge = 2; 
// }

// console.log(babyAge); 

// let babyAge = 1;
// let isBirthday = true;

// let babyAge = 2; 


// console.log(babyAge); 

// var babyAge = 1;
// var isBirthday = true;

// if (isBirthday) {
// 	var babyAge = 2; 
// }

// console.log(babyAge); 

// const a = 10;
// //reassign ❌ redeclare ❌
// console.log(a);


//block scope

//what is a block
// if (true) {
//     console.log("hello");
//     console.log("ello again");
// }

// {}  --> block when we want to run multiple lines
//relation bw block and let const


//apple , orange , apple

// let fruits = 'apple';
// console.log(fruits);
// {
//     let fruits = 'orange';
//     console.log(fruits);
// }
// console.log(fruits);


//block example

let fruits = 'apple';
console.log(fruits);
{
    let fruits ;
    console.log(fruits);
    fruits = 'orange';
    console.log(fruits);
}
console.log(fruits);


// let fruits = 'apple';
// console.log(fruits);
// {
//     console.log(fruits);  //error TDZ
//     let fruits;
//     console.log(fruits);
//     fruits = 'orange';
//     {
//         console.log(fruits);
//     }
//     console.log(fruits);
// }
// console.log(fruits);


// let fruits = 'apple';
// console.log(fruits);
// {
//     //console.log(fruits);  //error TDZ
//     let fruits;
//     console.log(fruits);
//     fruits = 'orange';
//     {
//         console.log(fruits);
//     }
//     console.log(fruits);
// }
// console.log(fruits);


