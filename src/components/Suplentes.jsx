import React from 'react'
import {connect} from 'react-redux';

const Suplentes = ({suplentes, quitarSuplente}) => (
  <section>
    <h2>Suplentes</h2>
    <div className="suplentes">
      {
        suplentes.map(j => (
          <article className="suplente" key={j.id}>
            <div>
              <img src={j.foto} alt={j.nombre} />
              <button onClick={() => quitarSuplente(j)}>X</button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = (state) => ({
  //recibe el estado de misore y retorno o extraigo una propiedad
  suplentes: state.suplentes //leo este valor del estado
});

const mapDispatchtoProps = dispatch => ({
  quitarSuplente(jugador) {
    dispatch({
      type: "QUITAR_SUPLENTE",//identificador del método
      jugador
    })
  }
})

export default connect(mapStateToProps, mapDispatchtoProps)(Suplentes);
