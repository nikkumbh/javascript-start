// console.log(this)

// function showThis(){
//     console.log(this)
// }
// showThis()

let obj = {
    name : "prabal",
    age : "21",

    f : function(){

        function b(){
            console.log(this)
        }
        b();
    }
}
obj.f();