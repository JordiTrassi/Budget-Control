import { ControlBudget, NewBudget } from './';

export const Header = ({
  gastos,
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
          presupuesto={presupuesto}
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
