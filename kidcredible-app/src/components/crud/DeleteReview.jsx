import React from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const DeleteBtn = () => {
  let { id } = useParams()
  console.log(id)

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8000/reviews/${id}`)
  }

  return (
    <div className="deleteBtn">
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteBtn
