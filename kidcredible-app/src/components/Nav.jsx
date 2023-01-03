import { Link } from "react-router-dom"
import HeaderPicture from "/Users/joliewoodson/Desktop/GA/unit4/Project 4/Kidcredible/Kidcredible_frontend/kidcredible-app/src/assests/kidcredible-header.png"

export default function Nav(props) {
  return (
    <div className="nav">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link
        href="https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap"
        rel="stylesheet"
      />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap');
      </style>
      <div className="headerImages">
        <h2 className="homeLink">Kidcredible</h2>{" "}
        <Link to="/">
          {" "}
          <img
            classname="headerImage"
            src={HeaderPicture}
            width="50%"
            height="auto"
          />
        </Link>
      </div>
      {/* <Link to="/">
        {" "}
        <h2 className="homeLink">Home</h2>{" "}
      </Link> */}
    </div>
  )
}
