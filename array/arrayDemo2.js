var users = ["amit","sumit","raj","parth","jay"]
//console.log(users)
// var upperuser=[]

// for(let i=0;i<users.length;i++){
//     upperuser.push(users[i].toUpperCase())
// }

//map -->loop
//map will return an array
var upperuser = users.map((u)=>{
    return u.toUpperCase() //push
})
var upperuser1 = users.map((u)=>u.toUpperCase())
console.log(upperuser)
console.log(upperuser1)


//task
var sales=[100,200,450,700,1200,90]
//salesaftdis =[] appply dis 10 %
//use map only