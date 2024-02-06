export default function Cesta({articulosCesta, setArticulosCesta, setArticulosDisponibles, articulosDisponibles}){
    const total = articulosCesta.reduce((acc, articulo) => acc + articulo.precio, 0);


    return(
        <>
        <h2>Cesta</h2>
        <table>
            <thead>
                <tr>
                     <td>Nombre</td>
                    <td>Precio</td>
                    <td>Unidades</td>
                </tr>
            </thead>
            <tbody>
                {articulosCesta.map((articulo)=>
                    <tr key={articulo.codigo}>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.precio}</td>
                        <td>{articulo.unidades}</td>
                        <td><button  onChange={()=>eliminarArticuloCesta()}>Eliminar</button></td>
                    </tr>
                )}
                <tr>
                    <td>{total}</td>
                </tr>
            </tbody> 
           
        </table>
        </>
    )
}