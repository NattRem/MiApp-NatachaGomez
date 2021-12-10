import OldN7 from "../Productos/OldN7.png"
import BarrelRye from "../Productos/BarrelRye.png"
import BarrelStrength from "../Productos/BarrelStrength.png"
import GentlemanJack from "../Productos/GentlemanJack.png"
import TenneseeHoney from "../Productos/TenneseeHoney.png"
import TennesseeRye from "../Productos/TennesseeRye.png"

const productos = [
    { id: 1,foto: OldN7 ,nombre:"Old Nº7",precio:"$5.000"},
    { id: 2,foto: BarrelRye , nombre: "Single Barrel Rye", precio:"$6.000"},
    { id: 3,foto: BarrelStrength , nombre: "Single Barrel Strength", precio:"$3.000"},
    { id: 4,foto: GentlemanJack , nombre: "GentlemanJack", precio:"$6.000"},
    { id: 5,foto: TenneseeHoney , nombre: "TenneseeHoney", precio:"$8.000"},
    { id: 6,foto: TennesseeRye , nombre: "TennesseeRye", precio:"$13.000"}
]


export const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})