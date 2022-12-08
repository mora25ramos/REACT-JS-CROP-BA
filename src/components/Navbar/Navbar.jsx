import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const NavBar =({menus, categorias})=> {
  return (
    <div className='navbar'>
      <div className='navbar__menus'>
      { 
        menus.map ((menu)=>{
        return <Link className='navbar__menu' to={menu.href}> {menu.name} </Link>
        })
      }
      </div>
      <div className='navbar__categorias'>
      {
        categorias.map ((categoria)=>{
          return <Link className='navbar__categoria' to={`/Category/${categoria.id}`}> {categoria.name} </Link>
        })
      }
      </div>
      <div>
        <CartWidget />
      </div>
    </div> 
  )
}

export default NavBar

