import './App.css'
import Cesta from "./componentes/Cesta"
import ArticulosAccesibles from "./componentes/ArticulosAccesibles"
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    fetch('http://44.221.16.151:3000/articulos')
    .then((response)=>{
      return response.json();
    })
    .then(data=>{
      setArticulosDisponibles(data)
    })
  },[])
  const [articulosCesta,setArticulosCesta]=useState([])
  const [articulosDisponibles,setArticulosDisponibles]=useState([])
  return (
    <>
      <Cesta articulosCesta={articulosCesta} articulosDisponibles={articulosDisponibles} setArticulosDisponibles={setArticulosDisponibles} setArticulosCesta={setArticulosCesta}/>
      <ArticulosAccesibles articulosDisponibles={articulosDisponibles} setArticulosDisponibles={setArticulosDisponibles} setArticulosCesta={setArticulosCesta}/>
    </>
  )
}

export default App
