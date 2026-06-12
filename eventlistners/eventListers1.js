const btn = document.getElementById("btn")
console.log(btn)
btn.addEventListener("click",()=>{
    alert("button clicked...")
})
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor="green"
})
btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor="yellow"
})