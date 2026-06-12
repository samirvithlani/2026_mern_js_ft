const numbers = [10,20,30,40,50,89]

const root = document.getElementById("root") //<div>
const h1tag = document.createElement("h1") //<h1></h1>
h1tag.innerText = "Hello"
root.appendChild(h1tag) //<div><h1></h1></div>


for(let i=0;i<numbers.length;i++){
    const notag = document.createElement("h3")
    notag.innerText = numbers[i]
    root.appendChild(notag)
}

const mybutton = document.createElement("button")
mybutton.innerText = "click"
root.appendChild(mybutton)
mybutton.addEventListener("click",()=>{
    alert("ok")
})