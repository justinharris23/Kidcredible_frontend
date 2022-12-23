import { Link } from "react-router-dom"

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <h2 className="homeLink">Kidcredible</h2>{" "}
      </Link>
      <Link to="/">
        {" "}
        <h2 className="homeLink">Home</h2>{" "}
      </Link>
    </div>
  )
}
