window.addEventListener("DOMContentLoaded", () => {
  //alert("okk....");

  const btn = document.getElementById("btn");
  console.log(btn);
  btn.addEventListener("click", () => {
    alert("button clicked...");
  });
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "green";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "yellow";
  });
});

window.addEventListener("scroll",()=>{
    //const body  = document.getElementsByTagName("body") //[array]
    const body  = document.getElementsByTagName("body")[0] 
    console.log(body)
    body.style.backgroundColor="blue"
})
