var sales =[[100,200,300],[400,500,600],[700,800,900]]

//[100,200,300,400,500,600,700,800,...]
var allDaySales = sales.flatMap((s)=>s)
console.log(allDaySales)

var sales =[[100,200,300],[400,500,600],[700,800,900]]

var allDaySales1 = sales.flatMap((s)=>s).map((s1)=>s1+100)
console.log(allDaySales1)

var allDaySales1 = sales.flatMap((s)=>s).filter((s1)=>s1>500)
console.log(allDaySales1)
