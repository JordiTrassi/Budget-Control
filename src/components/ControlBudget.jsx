import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlBudget = ({ gastos, presupuesto }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentage, setPorcentage] = useState(0);
    
    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        const nuevoPorcentage = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentage(nuevoPorcentage);
        }, 1000);
    }, [gastos]);

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR'
        })
    };


    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentage > 100 ? '#DC2626' : '#3B82F6',
                    })}
                    value={porcentage}
                    text={`${porcentage}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>

            </div>
        </div>
    );
}



