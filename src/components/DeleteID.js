import { useEffect, useState } from "react";

function ObjectiveList() {
    const [objetivos, setObjetivos] = useState([]);
  
    useEffect(() => {
      const objetivos = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));
      setObjetivos(objetivos);
    }, []);
  
    const handleBorrarObjetivo = (id) => {
      const nuevosObjetivos = objetivos.filter((objetivo) => objetivo.id !== id);
      setObjetivos(nuevosObjetivos);
    
      localStorage.removeItem(id.toString());
    
      nuevosObjetivos.forEach((objetivo) => {
        localStorage.setItem(objetivo.id.toString(), JSON.stringify(objetivo));
      });
    };
    
    return (
      <div>
        <h2>Lista de objetivos</h2>
        <ul>
          {objetivos.map((objetivo) => (
            <li key={objetivo.id}>
              <p>{objetivo.nombre}</p>
              <button onClick={() => handleBorrarObjetivo(objetivo.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default ObjectiveList;
