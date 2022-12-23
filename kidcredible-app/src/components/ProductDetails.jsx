import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CreateReview from "./crud/CreateReview"
import DeleteReview from "./crud/DeleteReview"
import UpdateReview from "./crud/UpdateReview"
import Nav from "./Nav"

export default function Reviews() {
  let { id } = useParams()

  let navigate = useNavigate()

  const showReview = (id) => {
    navigate(`/reviews/${id}`)
  }

  const [products, setProduct] = useState(null)
  const [reviews, setReview] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:8000/products/${id}`)

      setProduct(response.data)
      setReview(response.data.reviews)
    }

    getData()
  }, [])

  if (!reviews) {
    return <h2>Loading Reviews</h2>
  } else {
    return (
      <div className="container">
        <div className="title">
          <h1>Reviews for {products.name}!</h1>
          <div className="flex justify-center detailsImage">
            <img src={products.image} />
          </div>
          <h1 className="flex justify-center font-bold">{products.name}</h1>
          <h2 className="flex justify-center">{products.description}</h2>
        </div>
        <div className="grid">
          {reviews.map((reviews) => (
            <div className="cardNoImg">
              <div className="previewText">
                <h2>{reviews.name}</h2>
                <h2>{reviews.body}</h2>
                <DeleteReview reviews={reviews} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
