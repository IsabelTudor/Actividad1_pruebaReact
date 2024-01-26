import BarraBusqueda from "./BarraBusqueda"

export default function ArticulosAccesibles({articulosIniciales}){
    articulosIniciales.map(articulo=>{
      
    })
    return(
        <>
        <BarraBusqueda/>
        <table>
            <tr>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Unidades</td>
                <td>Accion</td>
            </tr>
            
            
        </table>
        
        </>
    )
}