import React from "react"
// import { useParams } from "react-router-dom"
// import { useState, useEffect } from "react"
import axios from "axios"

const DeleteBtn = ({ reviewdelete }) => {
  const handleDelete = async () => {
    // make a request to the API to delete the review
    await axios.delete(`http://localhost:8000/reviews/${reviewdelete}`)
    window.location.reload()
  }

  return (
    <div className="deleteBtn">
      <form onSubmit={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default DeleteBtn
