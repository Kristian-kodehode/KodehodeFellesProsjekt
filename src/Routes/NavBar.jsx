import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/KristianRoute">Kristian 🚀</Link>
      {/* Legg til din route nedfor i en av linkene */}
      <Link to="">Legg deg til</Link>
      <Link to="">Legg deg til</Link>
      <Link to="">Legg deg til</Link>
      <Link to="">Legg deg til</Link>
      <Link to="">Legg deg til</Link>
    </nav>
  );
};

export default NavBar;
