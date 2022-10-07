

export const NewBudget = ({ presupuesto, setPresupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={ e => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir"/>
      </form>
    </div>
  )
}


