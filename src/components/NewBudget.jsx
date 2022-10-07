

export const NewBudget = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            className="nuevo-presupusto"
            type="text"
            placeholder="Añade tu presupuesto"
          />
        </div>
        <input type="submit" value="Añadir"/>
      </form>
    </div>
  )
}


