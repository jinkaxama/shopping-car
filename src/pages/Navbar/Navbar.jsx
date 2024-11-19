import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = "fondo">
      <nav className='navbar'>
          <a href="index.html">
            <img className = "logo" src="../public/img/logo.svg" width= "200px" alt="imagen logo" />
          </a>
          <ul className='menu'>
              <li><Link className='menu-link' to="/">Inicio</Link></li>
              <li><Link className='menu-link' to="/nosotros">Nosotros</Link></li>
              <li><Link className='menu-link' to="#">Productos</Link></li>
              <li><Link className='menu-link' to="#">Contacto</Link></li>
              <li><Link className='menu-link' to="/car">Carrito</Link></li>
          </ul>
      </nav>
    </div>

  )
}

export default Navbar