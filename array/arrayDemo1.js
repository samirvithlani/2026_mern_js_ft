var users = ["amit","sumit","raj","parth","jay"]
console.log(users)
//console.log(users[0])

//for loop
// for(let i=0;i<users.length;i++){
//     console.log(users[i])
    
// }

//array func ->foreach
//loop ==>0,end
//single elm =users[i]
//u == users[i]
// --> forech return type void..
users.forEach((u)=>{
    console.log(u)
})

//array elm add..
// var x = users.push("kunal") //push will retuen new len of an array
// console.log("x==",x)
// console.log(users);
// var x = users.unshift("preet")
// console.log(users);
// console.log("x==",x)

// //remove...
// var removedElm = users.pop() //remove last and retuen
// console.log("removing....",removedElm)
// console.log(users)

// var removedElm = users.shift() //remove first and retuen
// console.log("removing....",removedElm)
// console.log(users)


//simlarity --> fisst index last index.. middle..

var lang = ["Guj","Hindi","Eng","Marathi"]
console.log("lang...",lang)
//lang.splice(2,1) //first param index //2nd param delete count  || go 2nd index and remove 1 elm
//lang.splice(1,1)
//lang.splice(1,0,"telugu") //goto 1st index dont remove anything and add telugu
//lang.splice(2,1,"telugu","tamil","kannad")
//lang.splice(0,1,"urdu")
console.log("lang...",lang)