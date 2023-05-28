import React from 'react'
import './navbar.css'
import logo from '../../assets/logoB.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {BsBoxSeam} from 'react-icons/bs'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {MdOutlineContactPhone} from 'react-icons/md'
import {VscAccount} from 'react-icons/vsc'
import {SlSocialInstagram} from 'react-icons/sl'
import {BsFacebook} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'






const Navbar = () => {
  return (
    <div className='navbar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Imagen Logo" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          Menú
        </h3>
        <ul className='menuList grid'>
        
          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <AiOutlineHome className="icon"/>
              <span className='smallText'>
                Inicio
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <BsBoxSeam className="icon"/>
              <span className='smallText'>
                Productos
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <MdOutlineLocalOffer className="icon"/>
              <span className='smallText'>
                Ofertas
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <AiOutlineShoppingCart className="icon"/>
              <span className='smallText'>
                Carrito 8
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          Redes Sociales
        </h3>
        <ul className='menuList grid'>
        
          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <VscAccount className="icon"/>
              <span className='smallText'>
                Mi Cuenta
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <SlSocialInstagram className="icon"/>
              <span className='smallText'>
                Instagram
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <BsFacebook className="icon"/>
              <span className='smallText'>
                Facebook
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <FaTiktok className="icon"/>
              <span className='smallText'>
                Tik-Tok
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar