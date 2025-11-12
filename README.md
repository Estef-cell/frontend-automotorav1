# Frontend Automotora - React + Vite

Proyecto frontend para el sistema de automotora hecho con React y Vite.

## Estructura del Proyecto (Atomic Design)

```
frontend/
├── src/
│   ├── components/
│   │   ├── atoms/          (componentes basicos)
│   │   └── molecules/      (componentes compuestos)
│   │       └── TarjetaAuto.jsx  (tarjeta de vehiculo)
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Instalacion

1. Instalar dependencias:
```bash
npm install
```

## Ejecutar el proyecto

```bash
npm run dev
```

El proyecto se abrira en: http://localhost:3000

## Componentes

### TarjetaAuto (Molecula)

Componente para mostrar la informacion de un vehiculo.

**Props que recibe:**
- `imagen`: URL de la foto del auto
- `modelo`: Modelo del vehiculo
- `marca`: Marca del vehiculo
- `anio`: Año del vehiculo
- `transmision`: Tipo de transmision (Manual/Automatica)
- `combustible`: Tipo de combustible (Bencina/Diesel/Hibrido)
- `kms`: Kilometraje
- `precio`: Precio en pesos chilenos

**Ejemplo de uso:**
```jsx
<TarjetaAuto
  imagen="https://ejemplo.com/foto.jpg"
  modelo="X4 xDrive30i"
  marca="BMW"
  anio={2023}
  transmision="Automatica"
  combustible="Bencina"
  kms={15000}
  precio={35990000}
/>
```

## Conexion con el Backend

El proyecto esta configurado para conectarse con el backend Spring Boot que corre en el puerto 8080.

La configuracion del proxy esta en `vite.config.js`:
```js
proxy: {
  '/api': {
    target: 'http://localhost:8080',
    changeOrigin: true,
  }
}
```


