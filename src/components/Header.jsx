import { ControlBudget, NewBudget } from './';

export const Header = ({
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
