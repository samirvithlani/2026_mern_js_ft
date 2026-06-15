const searchData = ()=>{

        //search data..
        const promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({id:1,name:"abcd",sal:90000})
            }, 3000);
        })
        
        return promise;

}

var x = searchData() //x --> promise obbject
console.log(x) //pending...
x.then((data)=>{
    console.log(data)
})
x.catch((err)=>{
    console.log(err)
})