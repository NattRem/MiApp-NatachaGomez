import OldN7 from "../components/imgs/Productos/OldN7.png"

// const productoDetalle =[
//     { id: 1,foto: OldN7 ,nombre:"Old Nº7",precio:"$5.000"}
// ]
const productoDetalle = {
    id: 1,
    image: OldN7,
    title: "Old Nº7",
    descripcion: "La presentación Old Nº 7 es de color ámbar; en nariz es de intensidad media, se perciben aromas a maíz, especias (vainilla, nuez moscada, pimienta), miel, notas florales. Detrás, aparecen notas tostadas y torrefactas.",
    precio:"$5.000"
};



const getProducto = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productoDetalle);
    }, 2000);
});

export default getProducto;
