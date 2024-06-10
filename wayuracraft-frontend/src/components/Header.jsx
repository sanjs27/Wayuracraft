import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ isLoggedIn, user }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">WayuuCraft</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
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
          {isLoggedIn ? (
            <li className="nav-item">
              <div className="profile-icon">
                {user?.nombre[0].toUpperCase()}
              </div>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login">Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
