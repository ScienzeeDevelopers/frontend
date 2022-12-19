import "../Articles.css"

// Components
import { NavLink } from "react-router-dom"

const NavigatePages = () => {
  return (
    <ul className="list_choice">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/articles/current"
          >Atuais</NavLink>
        </li>
        <li>
          <NavLink
             className={({ isActive }) => (isActive ? "active" : "")} 
            to="/articles/favorite"
          >Favoritos</NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")} 
            to="/articles/create"
          >Criar Artigo</NavLink>
        </li>
      </ul>
  )
}

export default NavigatePages
