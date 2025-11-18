// componente para mostrar la tarjeta de un auto
// esto es una molecula segun atomic design
import React, { useState } from 'react'
import ModalCotizacion from './ModalCotizacion'
import './tarjetaAuto.css'

function TarjetaAuto({ imagen, modelo, anio, transmision, combustible, kms, precio, marca }) {
  const [showModal, setShowModal] = useState(false)

  // formateo el precio para que se vea bonito con puntos
  const formatearPrecio = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const datosVehiculo = {
    imagen,
    modelo,
    anio,
    transmision,
    combustible,
    kms,
    precio,
    marca
  }

  return (
    <>
      <div className="card h-100 tarjetaAuto shadow-sm border-dark">
        <div className="contenedorImagen bg-light">
          <img src={imagen} alt={modelo} className="card-img-top fotoAuto" />
        </div>

        <div className="card-body d-flex flex-column">
          <div className="precioDestacado text-dark fw-bold fs-4 mb-2">
            ${formatearPrecio(precio)}
          </div>

          <h5 className="card-title nombreModelo text-dark fw-semibold mb-3">
            {marca} {modelo}
          </h5>

          <div className="textoInfo text-secondary small mb-3">
            <span className="anioAuto fw-medium text-dark">{anio}</span>
            <span className="separador mx-1">|</span>
            <span>{transmision}</span>
            <span className="separador mx-1">|</span>
            <span>{combustible}</span>
            {kms && (
              <>
                <span className="separador mx-1">|</span>
                <span>{kms.toLocaleString('es-CL')} kms</span>
              </>
            )}
          </div>

          <button
            className="btn btn-dark w-100 mt-auto"
            onClick={() => setShowModal(true)}
          >
            Ver detalles
          </button>
        </div>
      </div>

      {/* Modal de Cotización */}
      <ModalCotizacion
        show={showModal}
        onClose={() => setShowModal(false)}
        vehiculo={datosVehiculo}
      />
    </>
  )
}

export default TarjetaAuto
