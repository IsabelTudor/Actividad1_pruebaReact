export default function ArticulosAccesibles({articulosDisponibles, setArticulosDisponibles,setArticulosCesta}){
   const unidadesUpdate=(articulosDisponibles)=>{
    
   }
  
    const agregarArticulo=(articulo)=>{
        setArticulosCesta((previusState)=>[...previusState,articulo])
        setArticulosDisponibles(articulosDisponibles.map(art=>art.codigo===articulo.codigo ? {...art,unidades:art.unidades-1} :art))
    }   
    
    return(
        <>
        
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
                {articulosDisponibles.map((articulo,index)=>
                    <tr key={index}>
                        <td>{articulo.nombre}</td>
                        <td>{articulo.precio}</td>
                        <td>{unidadesUpdate()}</td>
                        <td><button onClick={()=>agregarArticulo(articulo)}>Comprar</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        
        </>
    )
}