import React from 'react'
import './activity.css'

import {AiOutlineArrowRight} from 'react-icons/ai'

import img from '../../../assets/labial-03.png'
import img1 from '../../../assets/high-02.png'
import img2 from '../../../assets/labial-02.png'
import img3 from '../../../assets/polvo-04.png'
import img4 from '../../../assets/surtido-02.png'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Productos Recientes</h1>
        <button className='btn flex'>
          Ver más <AiOutlineArrowRight className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleProduct flex">
          <img src={img} alt="Product" />
          <div className="productDetail">
            <span className="name">Rimel Colormates</span>
            <small>Comprar Ahora</small>
          </div>
          <div className="duration">
            <small>Hace 2 minutos</small>
          </div>
        </div>

        <div className="singleProduct flex">
          <img src={img1} alt="Product" />
          <div className="productDetail">
            <span className="name">Rimel Colormates</span>
            <small>Comprar Ahora</small>
          </div>
          <div className="duration">
            <small>Hace 2 minutos</small>
          </div>
        </div>

        <div className="singleProduct flex">
          <img src={img2} alt="Product" />
          <div className="productDetail">
            <span className="name">Rimel Colormates</span>
            <small>Comprar Ahora</small>
          </div>
          <div className="duration">
            <small>Hace 2 minutos</small>
          </div>
        </div>

        <div className="singleProduct flex">
          <img src={img3} alt="Product" />
          <div className="productDetail">
            <span className="name">Rimel Colormates</span>
            <small>Comprar Ahora</small>
          </div>
          <div className="duration">
            <small>Hace 2 minutos</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity