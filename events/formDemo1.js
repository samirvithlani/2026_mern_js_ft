const submitHandler =(event)=>{
    event.preventDefault() // it will stop reload..
    console.log("form subbmited..")
    const name = document.getElementById("name")
    console.log(name.value)

    const gender = document.getElementsByName("gender") //[input,input]
    console.log(gender)
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked==true){
            console.log(gender[i].value)
        }
    }
}