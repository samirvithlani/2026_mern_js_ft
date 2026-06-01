//function
//1 using function keyword arrow function

//with r with arg
//with r with arg
//
//

function test(){
    console.log("test function called..")
}
test()

function sum(a,b){
    console.log(a)
    console.log(b)
    console.log("sum function called..")
    let c = a + b
    return c
}

var ans = sum(10,20)
console.log("ans",ans);



function getfullName(user){

    return user.fname + " " +user.lname
}
var fullname = getfullName({fname:"raj",lname:"shah"})
console.log(fullname);
console.log(getfullName({fname:"amit",lname:"shah"}));


//arrow functions

var add = (a,b,c)=>{

    return a + b + c
}
//{} no --{} -->no return keyword



var ans1  = add(10,20,30)
console.log(ans1)

var add1 = (a,b,c)=>a+b+c
console.log("add=",add1(100,200,300)); //calling...

const findMax = (a,b)=> a>b ? a : b
console.log(findMax(100,20));
