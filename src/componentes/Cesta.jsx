export default function Cesta({articulosCesta, setArticulosCesta, setArticulosDisponibles, articulosDisponibles}){
    const eliminarArticulo=(articulo)=>{
        setArticulosCesta((previusState)=>[...previusState, articulo]);
        setArticulosDisponibles(articulosDisponibles.map(art => art.codigo === articulo.codigo ? {...art, unidades: art.unidades - 1} : art));
    }
   

    return(
        <>
        <h2>Cesta</h2>
        <table>
            <thead>
                <tr>
                     <td>Nombre</td>
                    <td>Precio</td>
                </tr>
            </thead>
            <tbody>
                {articulosCesta.map((articulo)=>
                    <tr key={articulo.codigo}>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.precio}</td>
                        <td><button  onClick={()=>eliminarArticulo(element)}>Eliminar</button></td>
                    </tr>
                )}
            </tbody>
            <tfoot>
             {articulosCesta.reduce((acc, articulo) => acc + articulo.precio, 0)}      
            </tfoot>
        </table>
        </>
    )
}