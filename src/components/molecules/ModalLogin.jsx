// Modal de Login - solo visual, sin funcionalidad
import React from 'react'

function ModalLogin({ show, onClose }) {
  if (!show) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Esta es solo una demo visual. La funcionalidad de login se implementará con el backend.')
    onClose()
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-dark" style={{ border: '2px solid #000' }}>
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title fw-bold">Iniciar Sesión</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control border-dark"
                    id="email"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control border-dark"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input border-dark"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Recordarme
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 fw-bold"
                >
                  Iniciar Sesión
                </button>

                <div className="text-center mt-3">
                  <a href="#" className="text-dark text-decoration-none">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <hr className="my-3" />

                <div className="text-center">
                  <p className="mb-2 text-secondary">¿No tienes cuenta?</p>
                  <button
                    type="button"
                    className="btn btn-outline-dark w-100"
                    onClick={() => alert('Funcionalidad de registro próximamente')}
                  >
                    Crear Cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalLogin
