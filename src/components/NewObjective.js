import React, { useState } from "react";
import Calendario from "./calendario.js"

function App() {
  const [horas, setHoras] = useState([]);

  const guardarHoras = (nuevasHoras) => {
    setHoras(nuevasHoras);
  };

  return (
    <div className="NewObjective">
      <header>
        <h1>Pràctica Final</h1>
      </header>
      <main>
        <Calendario guardarHoras={guardarHoras} />
        <ul>
          {horas.map((dia, index) => (
            <li key={index}>{dia}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;