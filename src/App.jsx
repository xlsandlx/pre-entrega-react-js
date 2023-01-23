import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
        <Navbar/>
        <ItemListContainer greeting='greeting'/>
   </>
  )

}

export default App
