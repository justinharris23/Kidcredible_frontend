import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CreateReview from "./crud/CreateReview"
import DeleteReview from "./crud/DeleteReview"
import UpdateReview from "./crud/UpdateReview"
import Nav from "./Nav"

function ProductDetails() {
  let { id } = useParams()

  console.log(useParams())

  const [product, setProducts] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:8000/products/${id}`)

      setProducts(response.data)
    }
    getProduct()
  }, [id])

  // if (setProducts.reviews)
  return product ? (
    <div className="mt-6 productDetails">
      <div className="flex justify-center detailsImage">
        <img src={product.image} />
      </div>
      <h1 className="flex justify-center font-bold">{product.name}</h1>
      <h2 className="flex justify-center">{product.description}</h2>
      {/* <div className="reviews">
          <h2>REVIEWS GO HERE</h2>
          {product.reviews.map((review, i) => (
            <div className="review" key={review.name}>
              <h3>{reviews.name}</h3>
              <h3>{review.body}</h3>
              <h4>{review.rating}</h4>
            </div>
          ))}
        </div> */}
    </div>
  ) : (
    <h1> product not found</h1>
  )
}

export default ProductDetails
