export default function BarraBusqueda({filterText,setFilterText}){
   return(
  
    <form>
      <input type="text" placeholder="Busqueda" value={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>
    </form>
    
    
   )
}