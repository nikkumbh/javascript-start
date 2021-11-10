function fn(){
    console.log(a);
    var a = 10;
    console.log(a);

    if(a==10){
        var a;
        console.log(a);
    }
    console.log(a);
}
fn();
/*
output : 
undefined
10
10
10
*/

function fn(){
    console.log(a);
    var a = 10;
    console.log(a);
    
    if(a==10){
        //changed the value of a
        var a = 20;
        console.log(a);
    }
    console.log(a);
}
fn();

/*
output : 

undefined
10
20
20
*/
