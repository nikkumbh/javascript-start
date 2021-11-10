//before 2015 or es6 there was only one way to decalre variables
//memory allocation or hoisting
console.log("line 3", varName);
//declare
var varName;
//assign
varName = 10;
console.log("line 8", varName);
//reassign
varName = 20;
console.log("line 11", varName);
//redeclare
var varName;
console.log("line 14", varName);