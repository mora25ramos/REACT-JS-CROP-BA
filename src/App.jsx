import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route, useHref} from 'react-router-dom'
import NavBar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {categorias, menus} from './Components/mock'

function App() {
 
  return (
    <BrowserRouter className="App">
      <NavBar menus={menus} categorias={categorias} />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/category/:id' element={<ItemListContainer/>} />
        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
