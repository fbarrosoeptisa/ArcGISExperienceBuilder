import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className='primer-widget'>
      <div className='header'>
        <img className='ayto-img' src="https://www.turismoextremadura.com/viajar/shared/galerias/rrtt/destinos-turisticos/destino-turistico_00089/img/A_FUENTE_CANTOS_03.JPG" alt="Ayuntamiento Fuente de Cantos" />
        <h1 className='ayto-title'>Ayuntamiento de Fuente de Cantos</h1>
      </div>
      <div className='ayto-info'>
          <p>
            <strong>
            Teléfono: 924 50 02 11
            </strong>
          </p>
          <p>
            <strong>
              Dirección: Pl. Constitución, 1, 06240 Fuente de Cantos, Badajoz
              </strong>
            </p>
          <a href='https://www.fuentedecantos.eu/' target='_blank'>Página Web del Ayuntamiento</a>
      </div>
    </div>
  )
}

export default Widget
