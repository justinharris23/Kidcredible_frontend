import ReactStars from "react-rating-stars-component"
import React from "react"
import { useEffect, useState, useContext } from "react"
import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react"
import axios from "axios"

export default function CreateReview({ id }) {
  // const id = props.id

  let newRating = 0

  const ratingChanged = (rating) => {
    newRating = rating
    console.log(newRating)
  }

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    body: "",
    rating: newRating,
  })

  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rating: newRating })
  }

  const handleLoginForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("Submitting form with data:", formData) // Add this line
    const response = await axios
      .post(
        `http://localhost:8000/reviews/`,

        formData
      )

      .then((response) => {
        console.log("Success:", response) // Add this line
        window.location.reload()
      })
      .catch((error) => {
        // console.log("Error:", error.response.data) // Add this line
      })
  }

  return (
    <div className="w-3/5 m-auto mt-20">
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="">
          <div className="mb-2 block">
            <h4>Add Your Own Review</h4>
            {/* <Label htmlFor="name" value="Name" /> */}
          </div>
          <TextInput
            id="name"
            type="name"
            placeholder="name"
            name="name"
            value={formData.name}
            required={true}
            onChange={handleLoginForm}
          />
        </div>

        <div>
          <div className="mb-2 block">
            {/* <Label htmlFor="title" value="Title" /> */}
          </div>
          <TextInput
            id="title"
            type="title"
            placeholder="title"
            name="title"
            value={formData.title}
            required={true}
            onChange={handleLoginForm}
          />
        </div>

        <div>
          <div className="mb-2 block">
            {/* <Label htmlFor="body" value="Body" /> */}
          </div>
          <TextInput
            id="body"
            type="body"
            placeholder="body"
            name="body"
            value={formData.body}
            required={true}
            onChange={handleLoginForm}
          />
        </div>

        <div>
          <ReactStars
            count={5}
            onChange={handleRatingChange}
            size={24}
            color2={"#ffd700"}
            rating={newRating} // Pass the current rating to the component
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
