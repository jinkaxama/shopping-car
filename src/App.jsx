import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Navbar from './pages/Navbar/Navbar'
import Nosotros from './pages/Nosotros/Nosotros'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import Car from './pages/Car/Car'
import { createContext, useReducer, useState } from 'react'

export const GlobalContext = createContext(null);
const initialData = {
  productosAgregados: [],
  productosTotales: [],
}

function App() {
  const [stateGlobal, setStateGlobal] = useState(initialData)

  return (
   <div>
    <GlobalContext.Provider value={{stateGlobal, setStateGlobal}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'element={<ItemListContainer />}></Route>
          <Route path='/item/:id'element={<ItemDetailContainer/>}></Route>
          <Route path='/nosotros'element={<Nosotros/>}></Route>
          <Route path='/car'element={<Car/>}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
   </div>
  )
}

export default App
