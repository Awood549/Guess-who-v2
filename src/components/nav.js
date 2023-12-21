import {Link} from "react-router-dom";

export default function NavBar() {

  return (
    <>
    <nav>
      <ul class="navbar">
        <Link to="/"><li class="nav-item">Home</li></Link>
        <Link to="/Instructions"><li class="nav-item">Instructions</li> </Link>
        <Link to="/Contact"><li class="nav-item">Contact</li></Link>
        <Link to="/Play"><li class="nav-item">Play</li></Link>
      </ul>
    </nav>
    </>
  )
};
