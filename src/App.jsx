import './App.css'
import Cesta from "./componentes/Cesta"
import ArticulosAccesibles from "./componentes/ArticulosAccesibles"
import { useState } from 'react';
import { useEffect } from 'react';
import BarraBusqueda from "./componentes/BarraBusqueda"

function App() {
  const [filterText, setFilterText] = useState('');
  useEffect(()=>{
    fetch(`http://44.221.16.151:3000/articulos?nombre_like=${filterText}`)
    .then((response)=>{
      return response.json();
    })
    .then(data=>{
      setArticulosDisponibles(data)
    })
  },[filterText])

  const [articulosCesta,setArticulosCesta]=useState([])
  const [articulosDisponibles,setArticulosDisponibles]=useState([])
  return (
    <>
      <Cesta articulosCesta={articulosCesta} articulosDisponibles={articulosDisponibles} setArticulosDisponibles={setArticulosDisponibles} setArticulosCesta={setArticulosCesta}/>
      <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
      <ArticulosAccesibles articulosDisponibles={articulosDisponibles} setArticulosDisponibles={setArticulosDisponibles} setArticulosCesta={setArticulosCesta}/>
    </>
  )
}

export default App
