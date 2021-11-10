console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "captain america";
console.log("varName", varName);
fn();
function fn() {
    console.log("hello from fn");
}
fn();
/*
here the fncontainer is a variable hence it is undefined therefore youll get error.
*/
fnContainer();
var fnContainer = function () {
    console.log("im expression");
}
fnContainer();


// fnContainer();
// function fnContainer() {
//     console.log("im expression");
// }
// fnContainer();
