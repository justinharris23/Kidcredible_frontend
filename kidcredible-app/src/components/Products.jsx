import { useState, useEffect } from "react"
import axios from "axios"

export default function Products() {
  const [products, setProducts] = useState

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:8000/products")
      setProducts(response.data)
      console.log(response.data)
    }

    getProducts()
  }, [])

  return (
    <div>
      <h1> testing testing </h1>
    </div>
  )
}
