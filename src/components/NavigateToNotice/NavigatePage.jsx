import "../../pages/Notices/Notices.css"

// Component
import {NavLink} from "react-router-dom"

function NavigatePage() {
  return (
    <div className="list_container">
        <ul className="list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/notices/old"
            >
              Antigos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/notices/current"
            >
              Atuais
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/notices/prenotice"
            >
              Pré-Editais
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/notices/favorite"
            >
              Favoritos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/notices/create"
            >
              Criar Edital
            </NavLink>
          </li>
        </ul>
      </div>
  )
}

export default NavigatePage
