import React from 'react'
import './listing.css'
import{AiOutlineArrowRight} from 'react-icons/ai'
import{AiFillHeart} from 'react-icons/ai'


import img from '../../../assets/labial-01.png'
import img1 from '../../../assets/polvo-01.png'
import img2 from '../../../assets/high-01.png'
import img3 from '../../../assets/base-01.png'
import img4 from '../../../assets/logoB.png'


const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Productos</h1>
        <button className='btn flex'>
          Ver más <AiOutlineArrowRight className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="imgProducto" />
          <h3>Matte Lip Lacquer</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img1} alt="imgProducto" />
          <h3>Polvo Compactor</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img2} alt="imgProducto" />
          <h3>Highligther</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img3} alt="imgProducto" />
          <h3>Base Colormate</h3>
        </div>
      </div>

      <div className="seller flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Ventas</h3>
            <button className='btn flex'>
              Ver más <AiOutlineArrowRight className="icon"/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img4} alt="imgUser" />
            </div>
            <div className="cardText">
              <span>
                367 Articulos Vendidos <br/>
                <small>
                  5 Marcas <span className='date'>Originales</span>
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