const promise = new Promise((resolve,reject)=>{
    //resolve,reject functions
    //resolve("resolve...")
    setTimeout(() => {
        //resolve("resolve..")
        reject("error...")
    }, 3000);
})

console.log(promise)

promise.then((data)=>{
    console.log(data)
})
promise.catch((err)=>{
    console.log(err)
})
//promise resolve ---> then block
//proise reject --> catch