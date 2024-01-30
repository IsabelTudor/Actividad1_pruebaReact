export default function Cesta({articulosCesta}){
    console.log(articulosCesta);
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
                {articulosCesta.map((articulo,index)=>
                    <tr key={index}>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.precio}</td>
                        <td>{articulo.unidades}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}