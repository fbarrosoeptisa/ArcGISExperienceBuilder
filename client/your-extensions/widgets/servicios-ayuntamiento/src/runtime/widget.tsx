import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import './widget.css'
import { useState } from 'react';

const Widget = (props: AllWidgetProps<IMConfig>) => {

  const [estadoBoton, setEstadoBoton] = useState<string>('');
  const [infoVisible, setInfoVisible] = useState<boolean>(false);


  const handlePoliciaClick = () => {
    setEstadoBoton('policia')
    setInfoVisible(true)
  }

  const handleBomberosClick = () => {
    setEstadoBoton('bomberos')
    setInfoVisible(true)
  }

  const handleCentroClick = () => {
    setEstadoBoton('centro')
    setInfoVisible(true)
  }

  const handleOcultarInfo = () => {
    setInfoVisible(false)
  }

  return (
    <div className='servicios-ayuntamiento'>
      <div className='botones'>
        <button onClick={handlePoliciaClick}>
          Policía
        </button>
        <button onClick={handleBomberosClick}>
          Bomberos
        </button>
        <button onClick={handleCentroClick}>
          Centro de Salud
        </button>
      </div>
      {infoVisible && estadoBoton === 'policia' &&
        <div className='info'>
          <p>
            <strong>
              Teléfono: 666 666 666 
            </strong>
          </p>
          <p>
            <strong>
              Dirección: Calle Policía
            </strong>
          </p>
          <a href='https://www.fuentedecantos.eu/' target='_blank'>Página Web</a>
        </div>
      }
      {infoVisible && estadoBoton === 'bomberos' && 
        <div className='info'>
          <p>
            <strong>
              Teléfono: 777 777 777  
            </strong>
          </p>
          <p>
            <strong>
              Dirección: Calle Bomberos
            </strong>
          </p>
          <a href='https://www.fuentedecantos.eu/' target='_blank'>Página Web</a>
        </div>
      }
      {infoVisible && estadoBoton === 'centro' &&
        <div className='info'>
          <p>
            <strong>
              Teléfono: 888 888 888
            </strong>
          </p>
          <p>
            <strong>
              Dirección: Calle Centro
            </strong>
          </p>
          <a href='https://www.fuentedecantos.eu/' target='_blank'>Página Web</a>
        </div>
      }
      {infoVisible && 
      <div className='ocultar'>
        <button onClick={handleOcultarInfo}>
          Cerrar
        </button>
      </div>
      }

    </div>
  )
}

export default Widget
