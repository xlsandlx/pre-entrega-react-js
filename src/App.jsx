import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='greeting' />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting='greeting' />} />
        <Route path='/item/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      {/* <ItemCount /> */}
    </BrowserRouter>
  )

}

export default App
