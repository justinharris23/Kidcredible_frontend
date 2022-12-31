import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const DeleteBtn = () => {
  let { id } = useParams() // get the product ID from the URL

  const [reviews, setReviews] = useState([]) // list of reviews for the product

  useEffect(() => {
    const getReviews = async () => {
      // make a request to the API to get the list of reviews for the product
      const response = await axios.get(`http://localhost:8000/products/${id}`)
      setReviews(response.data.reviews)
    }

    getReviews()
  }, [id]) // only make the request when the product ID changes

  const handleDelete = async (reviewId) => {
    // make a request to the API to delete the review
    await axios.delete(`http://localhost:8000/reviews/${reviewId}`)
    window.location.reload()
  }

  return (
    <div className="deleteBtn">
      {reviews.map((review) => (
        <div key={review.id}>
          <button onClick={() => handleDelete(review.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default DeleteBtn
