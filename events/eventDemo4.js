const getData = (event)=>{
    console.log(event)
    const name = document.getElementById("name")
    console.log(name.value) //value attribute
    const output = document.getElementById("output") //<span>
    output.innerHTML = name.value
}