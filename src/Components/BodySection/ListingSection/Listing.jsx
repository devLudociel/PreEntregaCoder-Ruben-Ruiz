import React from 'react'
import './listing.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'


import img from '../../../assets/labial-01.png'
import img1 from '../../../assets/polvo-01.png'
import img2 from '../../../assets/high-01.png'
import img3 from '../../../assets/base-01.png'
import img4 from '../../../assets/Avatar(1).png'
import img5 from '../../../assets/Avatar(2).png'
import img6 from '../../../assets/Avatar(3).png'
import img7 from '../../../assets/Avatar(4).png'
import img8 from '../../../assets/m1.png'
import img9 from '../../../assets/m2.png'
import img10 from '../../../assets/m3.png'
import img11 from '../../../assets/m4.png'





const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Productos</h1>
        <button className='btn flex'>
          Ver más <AiOutlineArrowRight className="icon" />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img} alt="imgProducto" />
          <h3>Matte Lip Lacquer</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img1} alt="imgProducto" />
          <h3>Polvo Compactor</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img2} alt="imgProducto" />
          <h3>Highligther</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img3} alt="imgProducto" />
          <h3>Base Colormate</h3>
        </div>

      </div>

      <div className="seller flex">

        <div className="topSellers">

          <div className="heading flex">
            <h3>Top Ventas</h3>
            <button className='btn flex'>
              Ver más <AiOutlineArrowRight className="icon" />
            </button>
          </div>

          <div className="card flex">

            <div className="users">
              <img src={img4} alt="imgUser" />
              <img src={img5} alt="imgUser" />
              <img src={img6} alt="imgUser" />
              <img src={img7} alt="imgUser" />
            </div>
            <div className="cardText">
              <span>
                367 Articulos Vendidos<br />
                <small>
                  El Último mes<span className='date'>35 Clientes</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="feacturedSellers">

            <div className="heading flex">
              <h3>Marcas</h3>
              <button className='btn flex'>
                Ver más <AiOutlineArrowRight className="icon" />
              </button>
            </div>

            <div className="card flex">
              <div className="users">
                <img src={img8} alt="imgBrands" />
                <img src={img9} alt="imgBrands" />
                <img src={img10} alt="imgBrands" />
                <img src={img11} alt="imgBrands" />
              </div>
              <div className="cardText">
                <span>
                  367 Articulos Vendidos<br />
                  <small>
                    El Último mes<span className='date'>+21 Marcas</span>
                  </small>
                </span>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Listing