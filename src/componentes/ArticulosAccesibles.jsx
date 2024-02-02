import BarraBusqueda from "./BarraBusqueda"
import { useState } from "react";
export default function ArticulosAccesibles({articulosDisponibles, setArticulosDisponibles,setArticulosCesta}){
    const [filterText, setFilterText] = useState('');
    console.log(articulosDisponibles);
    const agregarArticulo=(articulo)=>{
     
        setArticulosCesta((previusState)=>[...previusState,articulo])
        setArticulosDisponibles(articulosDisponibles.map(art=>art.codigo===articulo.codigo ? {...art,unidades:art.unidades-1} :art))
    }   
    
    return(
        <>
        <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
        <h2>Articulos Disponibles</h2>
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
                {articulosDisponibles.filter(articulo=>articulo.nombre.includes(filterText)).map((articulo,index)=>
                    <tr key={index}>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.precio}</td>
                        <td>{articulo.unidades}</td>
                        <td><button onClick={()=>agregarArticulo(articulo)}>Comprar</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        
        </>
    )
}