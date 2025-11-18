// Modal de Cotización - solo visual, sin funcionalidad backend
import React, { useState } from 'react'

function ModalCotizacion({ show, onClose, vehiculo }) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
    tipoCotizacion: 'COTIZA TU CREDITO',
    aceptaPoliticas: false
  })

  if (!show || !vehiculo) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.aceptaPoliticas) {
      alert('Debes aceptar las políticas de datos personales')
      return
    }

    console.log('Datos de cotización:', {
      ...formData,
      vehiculo: `${vehiculo.marca} ${vehiculo.modelo}`,
      precio: vehiculo.precio
    })

    alert(`Cotización enviada para ${vehiculo.marca} ${vehiculo.modelo}\n\nEsta es solo una demo visual. La funcionalidad se implementará con el backend.`)
    onClose()
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const formatearPrecio = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ zIndex: 1050 }}
      ></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ zIndex: 1055 }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-dark" style={{ border: '2px solid #000' }}>
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title fw-bold">COTIZA</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body p-4">
              {/* Información del vehículo */}
              <div className="bg-light p-3 rounded mb-4 border border-dark">
                <h6 className="fw-bold mb-2">{vehiculo.marca} {vehiculo.modelo}</h6>
                <div className="row">
                  <div className="col-6">
                    <p className="mb-1 small text-secondary">Año: <span className="text-dark fw-semibold">{vehiculo.anio}</span></p>
                    <p className="mb-1 small text-secondary">Transmisión: <span className="text-dark fw-semibold">{vehiculo.transmision}</span></p>
                  </div>
                  <div className="col-6">
                    <p className="mb-1 small text-secondary">Combustible: <span className="text-dark fw-semibold">{vehiculo.combustible}</span></p>
                    <p className="mb-1 small text-secondary">Kilometraje: <span className="text-dark fw-semibold">{vehiculo.kms?.toLocaleString('es-CL')} kms</span></p>
                  </div>
                </div>
                <h5 className="mt-2 mb-0 fw-bold">${formatearPrecio(vehiculo.precio)}</h5>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-dark"
                    name="nombre"
                    placeholder="Nombre y Apellido"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control border-dark"
                    name="telefono"
                    placeholder="ej: +56912345678"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                  <small className="text-secondary">ej: +56912345678</small>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-dark"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control border-dark"
                    name="mensaje"
                    rows="3"
                    placeholder="Mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input border-dark"
                      type="checkbox"
                      name="aceptaPoliticas"
                      id="aceptaPoliticas"
                      checked={formData.aceptaPoliticas}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label small" htmlFor="aceptaPoliticas">
                      Conozco y acepto el{' '}
                      <a href="#" className="text-dark">
                        manual de políticas y procedimientos de datos personales
                      </a>{' '}
                      y autorizo el manejo de éstos.
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input border-dark"
                      type="radio"
                      name="tipoCotizacion"
                      id="cotizaCredito"
                      value="COTIZA TU CREDITO"
                      checked={formData.tipoCotizacion === 'COTIZA TU CREDITO'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label fw-semibold" htmlFor="cotizaCredito">
                      COTIZA TU CRÉDITO
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-dark"
                      type="radio"
                      name="tipoCotizacion"
                      id="dejaAuto"
                      value="DEJA TU AUTO EN PARTE DE PAGO"
                      checked={formData.tipoCotizacion === 'DEJA TU AUTO EN PARTE DE PAGO'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label fw-semibold" htmlFor="dejaAuto">
                      DEJA TU AUTO EN PARTE DE PAGO
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 fw-bold py-2"
                >
                  ENVIAR
                </button>
              </form>
            </div>

            <div className="modal-footer bg-light border-top border-dark">
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={onClose}
              >
                Cerrar
              </button>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                <i className="bi bi-whatsapp"></i> Chatea con un ejecutivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalCotizacion
