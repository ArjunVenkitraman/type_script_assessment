interface detail{
        id: number,
        pname: string,
        pdescription: string,
        price: number
}
function getdetail():Promise<detail[]>{
    return fetch('index.json')
    .then(res=>res.json())
    .then(res=>{
        return res as detail[]
    })
}
getdetail()
    .then(product=>{
        console.log(product.map(u=>u.id+' '+u.pname+' '+u.pdescription+' '+u.price).toString())
    })

    //fake api
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
