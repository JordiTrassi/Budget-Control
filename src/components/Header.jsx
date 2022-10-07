import { NewBudget } from './NewBudget';


export const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
      <h1>Budget Control</h1>
      
      <NewBudget
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </header>
  )
}
