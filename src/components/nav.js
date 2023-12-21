import {Link} from "react-router-dom";

export default function NavBar() {

  return (
    <>
    <ul class="navbar">
      <Link to="/Instructions"><li class="nav-item">Instructions</li> </Link>
      <Link to="/Contact"><li class="nav-item">Contact</li></Link>
      <Link to="/Play"><li class="nav-item">Play</li></Link>
    </ul>
    </>
  )
};
