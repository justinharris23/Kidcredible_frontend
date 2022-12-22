import "./App.css"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Header from "./components/Header"
import Products from "./component/Products"
import ProductDetails from "./component/ProductDetails"

function App() {
  return (
    <div className="App">
      <header className="Nav">
        <Header></Header>
        <Nav></Nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
