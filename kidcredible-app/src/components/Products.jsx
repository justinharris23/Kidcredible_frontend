import { useState, useEffect } from "react"
import axios from "axios"

export default function Products() {
  const [products, setProducts] = useState()

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
      <div>
        {products.map((product, i) => (
          <div key={product.productname} className="card">
            <div className="flex justify-center productImageCard">
              <div className="flex justify-center productImage">
                <img src={product.image} />
              </div>
            </div>
            <div className="productDetails">
              <div className="flex justify-center productName">
                <h3> {product.name} </h3>
              </div>

              <div className="flex justify-center productType">
                <h3> {product.type} </h3>
              </div>
              <div className="flex justify-center productDescription">
                <h3>{product.description}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
