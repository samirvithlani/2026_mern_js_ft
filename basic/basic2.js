//var let const

var x =100
console.log("outside bloack",x)
{
console.log("inside bloack",x)
var p=200
console.log("inside block",p)
}
console.log("outside block",p)



let a = 1000
console.log("value of a outside block =",a)
{
    console.log("value of a inside block =",a)
    let b =2000
    console.log("value of b inside block =",b)
}
//console.log("value of b outside block =",b) error..

//redeclaration and re init

var j = 100
console.log(j)
j=200
console.log(j)
//reinitilization
//redclration both are possible using var
var j =500
console.log(j)


let i = 999
console.log(i)
i =9987
console.log(i)
//let i =90 //error

//final
const pi=3.14
console.log(pi)
//pi=3.15 //error

//const l; //Uncaught SyntaxError: Missing initializer in const declaration (at basic2.js:46:7)



