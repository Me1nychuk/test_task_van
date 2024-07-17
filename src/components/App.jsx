
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Favorite from '../pages/Favorite'

function App() {
  return(<>
  <Routes>
    <Route path='/' element={<Layout />} >
      <Route index element={<Home/> } />
      <Route path="catalog" element={<Catalog/> } />
      <Route path="favorite" element={<Favorite/> } />
      </Route>
      <Route path='*' element={ <Navigate to='/' replace/>} />
    </Routes>
    </>)
}

export default App
