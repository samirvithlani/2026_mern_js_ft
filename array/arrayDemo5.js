var users = ["amit","sumit","raj","parth","jay"]

//sort...
//var sorted = users.sort()
var sorted = users.sort((a,b)=>a.length-b.length)
console.log(sorted)

var data =[20,23,45,67,89,7,23,1111,44,67,9,999,87,67]

//var sortedData = data.sort()
//var sortedData = data.sort((a,b)=>a-b) //compare sort merge sort
var sortedData = data.sort((a,b)=>b-a) //compare sort merge sort
console.log(data)