import productos from "./stock.js"

export const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})

