

export const ControlBudget = ({presupuesto}) => {
  return (
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            {/* grafica */}
        </div>
          <div className="contenido-presupuesto">
              <p>
                  <span>Presupuesto: </span> {presupuesto} € 
              </p>

        </div>
    </div>
  )
}



