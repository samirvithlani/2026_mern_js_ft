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


const zomato1 = async()=>{


    //await will wait untill promise has been resolve or reject..
    //it will store resolve data or reject error in food object
    //if you want to write await inside func we have to make func async
    //write await against thoese functions whoese return type is promise
        const food = await searchFood() 
        console.log(food)
        //then catch
        const cart = await addtocart(food)
        console.log(cart)
        const pay = await payment(cart.total)
        console.log(pay)


}

zomato1()