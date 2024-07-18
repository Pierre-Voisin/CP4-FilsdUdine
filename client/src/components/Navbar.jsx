import logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Acceuil</li>

        <li>Catalogues</li>

        <li>Connexion</li>
      </ul>
    </nav>
  );
}
