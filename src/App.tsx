import {useState} from 'react'
import { Context } from './Context';
import {Routes, Route} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductPage from './pages/ProductPage/ProductPage';


export default function App(){

   const [favoritesC, setFavoritesC] = useState<[]>([])

   return(
      <Context.Provider value={{favoritesC, setFavoritesC}}>
         <Routes>
            <Route path='/' element={<ProductListPage/>} />
            <Route path='/product/:id' element={<ProductPage/>} />
         </Routes>
      </Context.Provider>
   )
}