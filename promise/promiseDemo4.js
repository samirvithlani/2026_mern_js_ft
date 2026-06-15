const searchFood = ()=>{
    console.log("food has been searching..")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({id:1001,name:"pizza",price:200})
        }, 3000);
    })

    return promise

}
//{id:1001,name:"pizza",price:200}
const addtocart = (food)=>{

    console.log("adding food to cart...")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            //{id:1001,name:"pizza",price:200}
                resolve({...food,status:true,qty:2,total:food.price*2})
        }, 2000);
    })
    return promise
}
const payment = (price)=>{
    
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({tid:100001,price:price,status:"success"})
        }, 4000);
    })
    return promise
}


const zomato = ()=>{

        var food = searchFood() //food == promise object
        //f ---> then use -->no outside
        food.then((f)=>{
            console.log(f)
            addtocart(f).then((c)=>{
                console.log("cart object",c)
                payment(c.total).then((p)=>{
                    console.log("[ayment done]",p)
                }).catch((err)=>{
                    console.log("payment error..")
                })
            }).catch((err)=>{
                console.log("cart error",err)
            })
        })
        food.catch((err)=>{
            console.log(err)
        })

}
zomato()