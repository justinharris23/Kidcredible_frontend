import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const DeleteBtn = () => {
  //

  let { id } = useParams()
  console.log(id)

  //need to save the review ID and get it into the axios call
  const [reviews, setReview] = useState([])
  console.log(reviews.id)

  const data = async () => {
    const review = await axios.get(`http://localhost:8000/products/${id}`)
    console.log(review.data.reviews)
    //need to change this so it can pull any id
    setReview(review.data.reviews[2].id)
  }
  data()

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8000/reviews/${reviews}`)
    window.location.reload()
  }

  return (
    <div className="deleteBtn">
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteBtn
