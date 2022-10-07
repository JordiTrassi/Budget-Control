import { useState } from 'react';
import { Header } from './components';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

export const App = () => {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto} alt="icono-nuevo-gasto" />
        </div>

      )}
    </div>   
  )
}

