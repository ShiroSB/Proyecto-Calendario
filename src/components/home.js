import React, { useState, useEffect } from 'react';

function App() {
  const day = new Date().toLocaleDateString();
  const [objetivos, setObjetivos] = useState([]);

  useEffect(() => {
    const objetivos = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));
    setObjetivos(objetivos);
  }, []);

  return (
    <div>
      <h1>{day}</h1>
      <h2>Lista de objetivos</h2>
      <ul>
        {objetivos.map((objetivo) => (
          <li key={objetivo.id}>
            {objetivo.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
