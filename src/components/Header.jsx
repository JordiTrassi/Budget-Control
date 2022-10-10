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
      )}
    </header>
  )
}
