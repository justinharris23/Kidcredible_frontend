import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ReactStars from "react-rating-stars-component"
import React from "react"

export default function Products() {
  const [products, setProducts] = useState()
  let navigate = useNavigate()

  const showProduct = (product) => {
    navigate(`products/${product.id}`)
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://fierce-crag-45615.herokuapp.com/products"
      )
      setProducts(response.data)
      console.log(response.data)
    }

    getProducts()
  }, [])

  if (!products) {
    return <h2> Loading Please Wait</h2>
  } else {
    return (
      <div className="flex justify-center productCards">
        {/* <div classname="grid grid-cols-1 md:grid-cols-4"> */}
        {products.map((product, i) => (
          <div
            key={product.name}
            className="productCard"
            onClick={() => showProduct(product)}
          >
            {/* <button
              className="detailsButton"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Details
            </button> */}
            <div className="flex justify-center productImageCard">
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="flex justify-center productImage"
              >
                {/* <img src={product.image} /> */}
              </div>
            </div>
            <div className="productDetails">
              <div className="flex justify-center productName">
                <h4> {product.name} </h4>
              </div>
            </div>
            <div className="productRating">
              <div className="flex justify-center productRating">
                <ReactStars
                  count={5}
                  value={product.rating}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      // </div>
    )
  }
}
