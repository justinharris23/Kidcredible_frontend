import { Link } from "react-router-dom"
// import HeaderPicture from "/Users/joliewoodson/Desktop/GA/unit4/Project 4/Kidcredible/Kidcredible_frontend/kidcredible-app/src/assests/kidcredible-header.png"

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
        <Link to="/">
          <h2 className="homeLink">Kidcredible</h2>{" "}
        </Link>
        <Link to="/">
          {" "}
          <div className="mb-3 imageDiv">
            <img
              className="headerImage"
              src="https://imgur.com/mnb1RNQ.jpg"
              width="400px"
              height="auto"
            />
          </div>
        </Link>
        <div>
          <button class="button-3" role="button">
            Sign In
          </button>
        </div>
      </div>
      {/* <Link to="/">
        {" "}
        <h2 className="homeLink">Home</h2>{" "}
      </Link> */}
    </div>
  )
}
