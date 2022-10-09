import { useEffect, useState } from 'react';
import { Header, ListadoGastos, Modal } from './components';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import { idCreator } from './helpers/idCreator';

export const App = () => {

  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {

  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 350);
  };

  const guardarGasto = gasto => {
    gasto.id = idCreator();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setAnimarModal(false);
    setTimeout(() => {
        setModal(false);
    }, 350);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt="icono-nuevo-gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}
    </div>
  );
}

