//print
// console.log("hello js:)");
//declaring variable
//let keyword is used
//javascript only tells you it is a variable
// let a;

//undefined , value in variable
// a = 10;
// a = 10.1;
// a = "hello i am a string";
// a = 'i am also a string';

// a = true;
// a = null;
// console.log("variable contains", a);


//types of variables : primitive type
// number, string, boolean, null;

// let number = 10;
// for (let i = 1; i <= number; i++) {
//     console.log("number is : ", i);
// }

//is prime number
let number = 23;
let flag = true;
for (let div = 2; div < number; div++) {
    if (number % div == 0) {
        flag = false;
        break;
    }
}

if (flag == true) {
    console.log(number, "is prime");
} else {
    console.log(number, "is not prime");
}