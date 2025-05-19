import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-400">Mi</span>Portfolio
          </div>
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'text-blue-400 font-medium' : 'hover:text-blue-300 transition'
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'text-blue-400 font-medium' : 'hover:text-blue-300 transition'
                }
              >
                Sobre mí
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  isActive ? 'text-blue-400 font-medium' : 'hover:text-blue-300 transition'
                }
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'text-blue-400 font-medium' : 'hover:text-blue-300 transition'
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header