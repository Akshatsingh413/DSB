async function  orderItem(name,time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name + " prepared");
        },time);
    });
}

async function resturant(){
    console.log("Order Placed");
    const pizza = await orderItem("Pizza",1000);
    console.log(pizza);
    const noodles = await orderItem("Noodles",2000);
    console.log(noodles);
    const burger = await orderItem("Burger",3000);
    console.log(burger);
    console.log("All ordered placed");
}

resturant();