import React from "react"
// import { useParams } from "react-router-dom"
// import { useState, useEffect } from "react"
import axios from "axios"

const DeleteBtn = ({ reviewdelete }) => {
  const handleDelete = async () => {
    // make a request to the API to delete the review
    await axios.delete(
      `https://fierce-crag-45615.herokuapp.com/${reviewdelete}`
    )
    window.location.reload()
  }

  return (
    <div className="crudButtons">
      <div className="deleteBtn">
        <form onSubmit={handleDelete}>
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  )
}

export default DeleteBtn
