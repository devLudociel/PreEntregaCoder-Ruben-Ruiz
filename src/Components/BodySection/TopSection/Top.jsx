import React from 'react'
import './top.css'
//Iconos
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineArrowRight} from "react-icons/ai"


//imagen 
import img from '../../../assets/chip.png'
import img2 from '../../../assets/img2.png'
import video from '../../../assets/videoC.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Sara`s Mackeup</h1>
          <p>Bienvenid@ de vuelta</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search" />
          <AiOutlineSearch className="icon"/>
        </div>

        <div className="adminDiv flex">
          <AiOutlineMessage className="icon"/>
          <IoIosNotificationsOutline className="icon"/>
          <div className="adminImg">
            <img src={img} alt="Perfil" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Productos Extraordinarios</h1>
          <p>Las mejores marcas del mercado</p>

          <div className="buttons flex">
            <button className='btn'>Ver más</button>
            <button className='btn transparent'>Mas Vendidos</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
            <div className="main flex">
                <div className="textDiv">
                  <h1>Estadisticas</h1>

                  <div className="flex">
                    <span>
                      Hoy <br/> <small>15 vendidos</small>
                    </span>

                    <span>
                      Este Mes <br/> <small>176 vendidos</small>
                    </span>
                  </div>
                  <span className="flex link">
                    Ir a mis Ordenes <AiOutlineArrowRight className='icon'/>
                  </span>
                </div>

                <div className="imgDiv">
                  <img src={img2} alt="imagen dist" />
                </div>

                {/* <div className="navbarCard">
                  <BsQuestionCircle className="icon"/>
                  <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>

                    <h3>Centro de Ayuda</h3>
                    <p>¿Tienes Algun Problema con la Plataforma?, Contactanos</p>

                    <button className='btn'>Ir al Centro de Ayuda</button>
                  </div>
                </div>  */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Top