// componente para mostrar la tarjeta de un auto
// esto es una molecula segun atomic design
import React from 'react'
import './tarjetaAuto.css'

function TarjetaAuto({ imagen, modelo, anio, transmision, combustible, kms, precio, marca }) {
  // formateo el precio para que se vea bonito con puntos
  const formatearPrecio = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <div className="tarjetaAuto">
      <div className="contenedorImagen">
        <img src={imagen} alt={modelo} className="fotoAuto" />
      </div>

      <div className="infoAuto">
        <div className="precioRojo">
          ${formatearPrecio(precio)}
        </div>

        <h3 className="nombreModelo">
          {marca} {modelo}
        </h3>

        <div className="textoInfo">
          <span className="anioAuto">{anio}</span>
          <span className="separador">|</span>
          <span>{transmision}</span>
          <span className="separador">|</span>
          <span>{combustible}</span>
          {kms && (
            <>
              <span className="separador">|</span>
              <span>{kms} kms</span>
            </>
          )}
        </div>

        <button className="botonVerMas">
          Ver detalles
        </button>
      </div>
    </div>
  )
}

export default TarjetaAuto
