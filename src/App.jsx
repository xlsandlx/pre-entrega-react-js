import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar from './components/NavBar/Navbar';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
        <Navbar/>
        <ItemListContainer greeting='greeting'/>
        <ItemCount />
        <ItemDetailContainer />
        <CartContainer />
   </>
  )

}

export default App
