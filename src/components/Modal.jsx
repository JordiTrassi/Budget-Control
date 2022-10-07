import CerrarBtn from '../img/cerrar.svg';

export const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
        }, 350);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="btn-cerrar-modal"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto:</legend>
            </form>
        </div>
    );
}



