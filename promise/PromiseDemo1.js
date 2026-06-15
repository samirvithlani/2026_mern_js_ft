// //zomato
// console.log("line 1")
// //console.log("line 2")
// setTimeout(() => {
//     console.log("line 2")
// }, 3000);
// console.log("line 3")

const searchfood= ()=>{

    setTimeout(() => {
        console.log("dish found pizza...")
    }, 3000);
}

const addtocart = ()=>{
    setTimeout(() => {
            console.log("food added to cart..")
    }, 1000);
}
const payment = ()=>{
    setTimeout(() => {
            console.log("payemnt")
    }, 8000);
}


const zomato = ()=>{

        searchfood()
        addtocart()
        payment()

}
zomato()