import productosDe from "./stockDetail";


export const getProducto = new Promise((resolve) => {
    setTimeout(() => {
    resolve(productosDe);
    }, 2000);
});

// export default getProducto;

