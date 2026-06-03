const science = (name)=>{
    console.log("science function called.. ",name)
}
const comm = (name)=>{
    console.log("comm function called..",name)
}
const arts = (name)=>{
    console.log("arts function called..",name)
}


//cb ==>callback
const admission = (cb)=>{
    //console.log("cb",cb) //---> cb ==science -->cb //comm() // cb -->arts
    console.log("admission called..")
    cb("raj") //science,comm,arts
}
var pers = 71;

if(pers>80){
    admission(science)
}
else if(pers>70){
    admission(comm) //
}
else if(pers>60){
    admission(arts)
}