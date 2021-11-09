
//key : value : property
//key : function : method

let cap = {
    name: "steve",
    lastname: "rogers",
    address: {
        city: "venic",
        state: "new york"
    }

    , age: 35,
    isAvenger:true,
    movies:["first avenger","ws","civilwar"],
    sayHi: function() {
        console.log("cap says hi");
    }
};

// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[0]);
// cap.sayHi();

//set, update
// console.log("cap : ", cap);
// cap.age=36;
// cap.isAvenger=false;
// cap.friends=['tony','bucky','peter'];
// console.log("--------------------");
// console.log("cap : ", cap);

// for (let key in cap){
//     console.log(key, " : " , cap[key]);
// }
