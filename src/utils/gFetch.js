let productos = [
    {id:'1', categoria:'remeras', name: "producto 1", price: 21},
    {id:'2', categoria:'remeras', name: "producto 2", price: 51},
    {id:'3', caegoria:'remeras', name: "producto 3", price: 65},
    {id:'4', categoria:'gorras', name: "producto 4", price: 32},
    {id:'5', categoria:'gorras', name: "producto 5", price: 15},
    {id:'6', categoria:'gorras', name: "producto 6", price: 25},
    {id:'7', categoria:'gorras', name: "producto 7", price: 81}
]

export const gFetch = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)
        },1000)
    })
}


