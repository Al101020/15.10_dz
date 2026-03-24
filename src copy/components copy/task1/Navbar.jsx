import { NavLink } from 'react-router'
export default function Navbar() {
  return (
    <nav className='menu'>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'menu__item-active menu__item' : 'menu__item'}
        end
      >
        ГЛАВНАЯ
      </NavLink>
      <NavLink
        to="/drift"
        className={({ isActive }) => isActive ? 'menu__item-active menu__item' : 'menu__item'}
      >
        ДРИФТ-ТАКСИ
      </NavLink>
      <NavLink
        to="/timeattack"
        className={({ isActive }) => isActive ? 'menu__item-active menu__item' : 'menu__item'}
      >
        Time Attack
      </NavLink>
      <NavLink
        to="/Forza"
        className={({ isActive }) => isActive ? 'menu__item-active menu__item' : 'menu__item'}
      >
        ForzaPage
      </NavLink>
    </nav>
  )
}