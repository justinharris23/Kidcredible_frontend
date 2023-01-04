import ReactStars from "react-rating-stars-component"
import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CreateReview from "./crud/CreateReview"
import DeleteReview from "./crud/DeleteReview"
import UpdateReview from "./crud/UpdateReview"

export default function Reviews() {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

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
        <div className="pageDetails">
          <div className="flex justify-center detailsImage">
            <img src={products.image} />
          </div>
          <div className="align-middle detailsContent">
            <h3 className="flex justify-center align-middle font-bold">
              {products.name}
            </h3>
            <h3 className="flex justify-center align-middle">
              {products.description}
            </h3>
          </div>
        </div>
        <br />
        <h1 className=" font-semibold text-black reviewsHeader">
          Reviews for {products.name}
        </h1>
        <div className="mainReview">
          <div className="reviewContainer">
            {reviews
              .slice(0)
              .reverse()
              .map((review, index) => (
                <div className="reviewsCard">
                  <div className="previewText">
                    <h4>{review.name}</h4>
                    {/* <h2>{review.title}</h2> */}
                    <h4>{review.body}</h4>
                    <div className="starsContainer">
                      <div className="reviewStars">
                        <ReactStars
                          count={5}
                          value={review.rating}
                          onChange={ratingChanged}
                          size={24}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="editDelete">
                    <div>
                      <UpdateReview review={review} id={review.id} />
                    </div>
                    <div>
                      <DeleteReview reviewdelete={review.id} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {<CreateReview id={id} />}
      </div>
    )
  }
}
