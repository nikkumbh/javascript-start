// console.log("line no 1", varName);
//here variable varname is also a lexical scope as its globally declared

// var varName = 10;

// function b(){
//     console.log("line no 5", varName);
// }
// console.log("line no 7" , varName);
// function fn(){
//     console.log("line no 9", varName);
//     var varName = 20;
//     b();
//     console.log("line no 13", varName)
// }
// fn();


// for teaching about lexical scope.
// let variable = 2;
// function parent(){
//     function child(){
//         console.log(variable);
//     }
//     child();
// }
// parent();


console.log("line no 1", varName);
var varName = 10;
function b() {
    console.log("line no 8", varName);
}
console.log("line no 8", varName);
function fn() {
    console.log("line no 5", varName);
    var varName = 20;
    b();
    console.log(varName);
}
fn();