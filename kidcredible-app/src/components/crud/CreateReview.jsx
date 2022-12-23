import { useEffect, useState, useContext } from "react"
import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react"
import axios from "axios"

export default function CreateReview(id) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    body: "",
    rating: "",
  })

  const handleLoginForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    // const response = await Client.post(`/reviews/`, formData)
    const response = await axios.delete(`http://localhost:8000/reviews/${id}`)
    return response.data
    window.location.reload()
  }

  useEffect(() => {})

  return (
    <div className="w-3/5 m-auto mt-20">
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="name"
            placeholder="name"
            name="name"
            value={formData.reviewname}
            required={true}
            onChange={handleLoginForm}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
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
            <Label htmlFor="body" value="Body" />
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
          <div className="mb-2 block">
            <Label htmlFor="rating" value="Rating" />
          </div>
          <TextInput
            id="rating"
            type="rating"
            placeholder="rating"
            name="rating"
            value={formData.rating}
            required={true}
            onChange={handleLoginForm}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
