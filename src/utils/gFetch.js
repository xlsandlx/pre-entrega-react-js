let productos = [
    {id:'1', marca:'Nike', categoria:'remeras', name: "producto 1", price: 21, foto: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/698/478/products/remera-negra-hombre1-13d0f5bda838120d2316213666641926-640-0.png'},
    {id:'2', marca:'Puma', categoria:'remeras', name: "producto 2", price: 51, foto: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/698/478/products/remera-negra-hombre1-13d0f5bda838120d2316213666641926-640-0.png'},
    {id:'3', marca:'Topper', categoria:'remeras', name: "producto 3", price: 65, foto: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/698/478/products/remera-negra-hombre1-13d0f5bda838120d2316213666641926-640-0.png'},
    {id:'4', marca:'Nike', categoria:'pantalones', name: "producto 4", price: 32, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/pantalon-19-2000-ng1-e915bac572f461e88e16733084800279-480-0.webp'},
    {id:'5', marca:'Puma', categoria:'pantalones', name: "producto 5", price: 15, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/pantalon-19-2000-ng1-e915bac572f461e88e16733084800279-480-0.webp'},
    {id:'6', marca:'Topper', categoria:'pantalones', name: "producto 6", price: 25, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/pantalon-19-2000-ng1-e915bac572f461e88e16733084800279-480-0.webp'},
    {id:'7', marca:'Nike', categoria:'zapatillas', name: "producto 7", price: 81, foto: 'https://coppelar.vtexassets.com/arquivos/ids/1745742/R-924333-2.png?v=637974811734130000'},
    {id:'8', marca:'Puma', categoria:'zapatillas', name: "producto 8", price: 61, foto: 'https://coppelar.vtexassets.com/arquivos/ids/1745742/R-924333-2.png?v=637974811734130000'},
    {id:'9', marca:'Topper', categoria:'zapatillas', name: "producto 9", price: 15, foto: 'https://coppelar.vtexassets.com/arquivos/ids/1745742/R-924333-2.png?v=637974811734130000'}
]

export const gFetch = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)
        },1000)
    })
}


