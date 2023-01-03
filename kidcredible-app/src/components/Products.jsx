import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Products() {
  const [products, setProducts] = useState()
  let navigate = useNavigate()

  const showProduct = (product) => {
    navigate(`products/${product.id}`)
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:8000/products")
      setProducts(response.data)
      console.log(response.data)
    }

    getProducts()
  }, [])

  if (!products) {
    return <h2> Loading Please Wait</h2>
  } else {
    return (
      <div className="productCards">
        {/* <div classname="grid grid-cols-1 md:grid-cols-4"> */}
        {products.map((product, i) => (
          <div
            key={product.name}
            className="productCard"
            onClick={() => showProduct(product)}
          >
            <button
              className="detailsButton"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Details
            </button>
            <div className="flex justify-center productImageCard">
              <div className="flex justify-center productImage">
                <img src={product.image} />
              </div>
            </div>
            <div className="productDetails">
              <div className="flex justify-center productName">
                <h3> {product.name} </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      // </div>
    )
  }
}
