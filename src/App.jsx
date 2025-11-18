import React, { useState } from 'react'
import TarjetaAuto from './components/molecules/TarjetaAuto'
import ModalLogin from './components/molecules/ModalLogin'
import './App.css'

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  // datos de ejemplo que en el futuro vendran del backend
  // estos datos simulan lo que devolveria la api de vehiculos
  const autosEjemplo = [
    {
      id: 1,
      imagen: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
      modelo: 'X4 xDrive30i',
      marca: 'BMW',
      anio: 2023,
      transmision: 'Automatica',
      combustible: 'Bencina',
      kms: 15000,
      precio: 35990000
    },
    {
      id: 2,
      imagen: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop',
      modelo: 'Corolla',
      marca: 'Toyota',
      anio: 2024,
      transmision: 'Manual',
      combustible: 'Hibrido',
      kms: 5000,
      precio: 18990000
    },
    {
      id: 3,
      imagen: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500&h=300&fit=crop',
      modelo: 'Tucson',
      marca: 'Hyundai',
      anio: 2023,
      transmision: 'Automatica',
      combustible: 'Diesel',
      kms: 22000,
      precio: 24990000
    },
    {
      id: 4,
      imagen: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
      modelo: 'C-Class',
      marca: 'Mercedes-Benz',
      anio: 2022,
      transmision: 'Automatica',
      combustible: 'Bencina',
      kms: 35000,
      precio: 42990000
    }
  ]

  return (
    <div className="App">
      {/* Header con Bootstrap - tema blanco y negro */}
      <header className="headerPrincipal bg-dark text-white">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0 fw-bold">AUTOMOTORA</h2>
            <button
              className="btn btn-outline-light fw-semibold"
              onClick={() => setShowLoginModal(true)}
            >
              <i className="bi bi-person-circle me-2"></i>
              Iniciar Sesión
            </button>
          </div>
          <h1 className="display-4 fw-bold mb-3">Vehículos Disponibles</h1>
          <p className="lead mb-0">Encuentra el auto de tus sueños</p>
        </div>
      </header>

      {/* Modal de Login */}
      <ModalLogin
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      {/* Main content con Bootstrap Grid */}
      <main className="container py-5">
        <div className="row g-4">
          {autosEjemplo.map((auto) => (
            <div key={auto.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <TarjetaAuto
                imagen={auto.imagen}
                modelo={auto.modelo}
                marca={auto.marca}
                anio={auto.anio}
                transmision={auto.transmision}
                combustible={auto.combustible}
                kms={auto.kms}
                precio={auto.precio}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer con Bootstrap */}
      <footer className="piePagina bg-black text-white mt-auto">
        <div className="container">
          <p className="mb-0 py-4 text-center">Proyecto Automotora 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default App
