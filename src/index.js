import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Aquí se debe envolver App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si quieres medir el rendimiento en tu app, puedes pasar una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviarlos a un endpoint de análisis.
reportWebVitals();