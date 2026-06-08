const getData = ()=>{
    //alert("function called...")
    const text = document.getElementById("text")
    //text <h1>Hello</h1>
    console.log(text)
    console.log(text.innerText) // <h1>.....</h1>
    //change
    text.innerText = "HI"
}

const getData2 = ()=>{
    alert("double clicked...")
}

const generateBox = ()=>{

    //<div id="box"></div>
    const box = document.getElementById("box") //<div>
    console.log(box)
    box.style.height="200px"
    box.style.width="200px"
    box.style.backgroundColor="red"
}