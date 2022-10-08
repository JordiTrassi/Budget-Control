import { Gasto } from './Gasto';

export const ListadoGastos = ({ gastos }) => {
  return (
      <div className="listado-gastos contenedor">
          <h2>{gastos.length ? 'Gastos:' : 'No Hay Gastos Aún'}</h2>
          {gastos.map(gasto => (
              <Gasto
                  key={gasto.id}
                  gasto={gasto}
              />
          ))}
      </div>
  )
}

