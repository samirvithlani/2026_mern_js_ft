//call after any function from that function

function calling(){

    console.log("calling called...")
}

function demo(a){

    console.log("a=",a)
    //a == 100 --> math op
    //a == calling()
    a() //calling function call


}
//demo() //demo
// demo()
//demo(100)
// demo("java")
// demo(["mm"])
demo(calling)