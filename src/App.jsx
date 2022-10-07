import { useState } from 'react';
import { Header, Modal } from './components';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

export const App = () => {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);
  };

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
          <img
            src={IconoNuevoGasto}
            alt="icono-nuevo-gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

