const science = ()=>{
    console.log("science function called..")
}
const comm = ()=>{
    console.log("comm function called..")
}
const arts = ()=>{
    console.log("arts function called..")
}


//cb ==>callback
const admission = (cb)=>{
    //console.log("cb",cb) //---> cb ==science -->cb //comm() // cb -->arts
    console.log("admission called..")
    cb()
}
var pers = 91;

if(pers>80){
    admission(science)
}
else if(pers>70){
    admission(comm) //
}
else if(pers>60){
    admission(arts)
}