const chnageColor =() =>{
    //alert("mouse entered...")
    // <div class="box" id="box" onmouseenter="chnageColor()">

    const box = document.getElementById("box") //<div>
    box.style.backgroundColor="blue"
    
}

const rechnageColor =() =>{
    //alert("mouse entered...")
    // <div class="box" id="box" onmouseenter="chnageColor()">

    const box = document.getElementById("box") //<div>
    box.style.backgroundColor="white"

}

const generateNo =() =>{

      const box = document.getElementById("box") //<div>
      //genrate random no
      //const randomNo = Math.random()*1000
      const randomNo = Math.floor(Math.random()*1000)
      console.log(randomNo)
      box.style.color="white"
      //box.innerHTML="<h1>"+randomNo+"</h1>"
      box.innerHTML = `<h1>${randomNo}</h1>`

}