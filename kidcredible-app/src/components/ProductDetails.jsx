import ReactStars from "react-rating-stars-component"
import React from "react"
import { render } from "react-dom"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CreateReview from "./crud/CreateReview"
import DeleteReview from "./crud/DeleteReview"
import UpdateReview from "./crud/UpdateReview"
import Nav from "./Nav"

export default function Reviews() {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  let { id } = useParams()
  // let { reviewId } = useParams()

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

  // const handleDelete = async () => {
  //   await axios.delete(`http://localhost:8000/reviews/${reviewId}`)
  //   window.location.reload()
  // }

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
        <br />
        <div className="grid">
          {reviews
            .slice(0)
            .reverse()
            .map((review, index) => (
              <div className="cardNoImg">
                <div className="previewText">
                  <h2>{review.name}</h2>
                  {/* <h2>{review.title}</h2> */}
                  <h2>{review.body}</h2>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    onChange={ratingChanged}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <UpdateReview review={review} id={review.id} />
                  <DeleteReview reviewdelete={review.id} />

                  {/* <button onClick={() => handleDelete(reviews[index].id)}>
        Delete
      </button> */}
                </div>
              </div>
            ))}
        </div>
        {<CreateReview id={id} />}

        <div></div>
      </div>
    )
  }
}
