import BarraBusqueda from "./BarraBusqueda"
import { useState } from "react";
export default function ArticulosAccesibles({articulosIniciales}){
    const [filterText, setFilterText] = useState('');

    return(
        <>
        <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
        <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Unidades</td>
                    <td>Accion</td>
                </tr>
            </thead>
            <tbody>
                {articulosIniciales.filter(articulo=>articulo.nombre.includes(filterText)).map((articulo,index)=>
                    <tr key={index}>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.precio}</td>
                        <td>{articulo.unidades}</td>
                        <td><button>Comprar</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        
        </>
    )
}