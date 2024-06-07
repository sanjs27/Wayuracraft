// Header.js
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const auth = useAuth();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/dashboard">Tienda de Mochilas</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/productos">Productos</Link>
          </li>
          <li className="nav-item">
            <Link to="/carrito">Carrito</Link>
          </li>
          <li className="nav-item">
            <Link to="/perfil">Perfil</Link>
          </li>
          <li className="nav-item">
            <button onClick={() => auth.logOut()} className="nav-button">
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
