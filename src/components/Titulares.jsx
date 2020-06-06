import React from 'react'
import {connect} from "react-redux";
import cancha from "../cancha.svg";

const Titulares = ({titulares, quitarTitular}) => (
  <section>
    <div className="cancha">
      {
        titulares.map(j => (
          <article className="titular" key={j.id}>
            <div>
              <img src={j.foto} alt={j.nombre} />
              <button onClick={() => quitarTitular(j)}>X</button>
            </div>
          </article>
        ))
      }
      <img src={cancha} alt="Cancha de deportes" />
    </div>
  </section>
)

const mapStateToProps = (state) => ({
  //recibe el estado de misore y retorno o extraigo una propiedad
  titulares: state.titulares //leo este valor del estado
});

const mapDispatchtoProps = dispatch => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",//identificador del método
      jugador
    })
  }
})

export default connect(mapStateToProps, mapDispatchtoProps)(Titulares);

