import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const players = [
  { name: 'Jugador 1', position: 'Delantero' },
  // ... otros jugadores
];

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // ... resto del código del formulario y lógica ...

  return (
    <div>
      {/* Formulario para seleccionar jugadores */}
      <button onClick={handleSubmit}>Enviar equipo</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);