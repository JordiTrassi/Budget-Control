import { ControlBudget, NewBudget } from './';

export const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto
}) => {

  return (
    <header>
      <h1>Budget Control</h1>
      <img
        className="icon-budget"
        src="https://cdn.iconscout.com/icon/free/png-256/budget-1850786-1571027.png"
        alt="icon budget"
      />
      {isValidPresupuesto ? (
          <ControlBudget
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        ) : (
          <NewBudget
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          /> 
        )
      }
    </header>
  )
}
