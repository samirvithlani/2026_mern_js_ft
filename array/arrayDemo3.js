var data =[20,23,45,67,89,12,23,44,67,90,87,67]
console.log(data)
//even no array
var evenarray =[]

for(let i=0;i<data.length;i++){
    if(data[i]%2==0){
        evenarray.push(data[i])
    }
}
console.log(evenarray)

//filter.
var evenarray1 = data.filter((d)=>{
    return d %2==0
})
console.log(evenarray1)
//single line
var evenarray2 = data.filter((d)=>d%2==0)
console.log(evenarray2)

var users = ["amit","sumit","raj","parth","jay"]
var filtUser = users.filter((u)=>u.length>4)
console.log(filtUser)