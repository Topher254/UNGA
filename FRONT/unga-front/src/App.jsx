import Navbar from "./COMPONENTS/Navbar"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./PAGES/Login"
import Shop from "./PAGES/Shop"
import Shopcategory from "./PAGES/Shop"
import Product from "./PAGES/Product"
import Cart from "./PAGES/Cart"
function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/men" element={<Shopcategory category='men'/>} />
          <Route path="/women" element={<Shopcategory category="women" />} />
          <Route path="/kid" element={<Shopcategory category="kid" />} />
          <Route path="/product" element={<Product/>} >
            <Route path=":productId" element={<Product />} /></Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            </Routes>
      </BrowserRouter>

    </div>

  )

}
export default App
