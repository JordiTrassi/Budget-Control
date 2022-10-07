import { useState } from 'react';
import { Message } from './Message';


export const NewBudget = ({ presupuesto, setPresupuesto }) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0 ) {
        setMensaje('No es un presupuesto válido')
    } else {
      
    }

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={ e => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Message tipo="error">{mensaje}</Message>}
      </form>
    </div>
  )
}


