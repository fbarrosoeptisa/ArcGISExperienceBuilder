import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="primer-widget">
      <div className="header">
        <img
          className="ayto-img"
          src={props.config.imagen}
          alt="Ayuntamiento Fuente de Cantos"
        />
        <h1 className="ayto-title">{props.config.nombre}</h1>
      </div>
      <div className="ayto-info">
        <p>
          <strong>Teléfono: {props.config.telefono}</strong>
        </p>
        <p>
          <strong>Dirección: {props.config.direccion}</strong>
        </p>
        <a href={props.config.web} target="_blank">
          Página Web del Ayuntamiento
        </a>
      </div>
    </div>
  )
}

export default Widget
