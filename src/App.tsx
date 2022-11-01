import { Navbar } from "./components/navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Catalog from "./pages/catalog"
import Cart from "./pages/cart"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
