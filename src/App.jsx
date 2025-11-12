import React from 'react'
import TarjetaAuto from './components/molecules/TarjetaAuto'
import './App.css'

function App() {
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
      <header className="headerPrincipal">
        <h1>Automotora - Vehiculos Disponibles</h1>
        <p className="subtitulo">Encuentra el auto de tus sueños</p>
      </header>

      <main className="contenedorTarjetas">
        {autosEjemplo.map((auto) => (
          <TarjetaAuto
            key={auto.id}
            imagen={auto.imagen}
            modelo={auto.modelo}
            marca={auto.marca}
            anio={auto.anio}
            transmision={auto.transmision}
            combustible={auto.combustible}
            kms={auto.kms}
            precio={auto.precio}
          />
        ))}
      </main>

      <footer className="piePagina">
        <p>Proyecto Automotora 2025 - Desarrollado con React + Vite</p>
      </footer>
    </div>
  )
}

export default App
