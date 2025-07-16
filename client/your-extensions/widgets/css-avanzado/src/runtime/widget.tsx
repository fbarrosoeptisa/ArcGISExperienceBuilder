/** @jsx jsx */

import { jsx, css, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { Button } from 'jimu-ui';
import { useState } from 'react';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [colorFondo, setColorFondo] = useState<string>('whitesmoke');

  const colorFondoHandler = () => {
    setColorFondo(props.theme.colors.danger);
  };

  const estilado = css`
    background-color: ${colorFondo};
    border-radius: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 6px;
    padding: 10px;

    /* Selecciona los hijos con clase header */
    & .header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 4px;
      align-items: center;
    }

    & .ayto-img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
      padding: 6px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      background: #fff;
    }

    & .ayto-title {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      padding: 6px;
      margin: 0;
    }

    & .ayto-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 6px;
      padding: 6px;
    }

    & .ayto-info a {
      color: #0078d4;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    & .ayto-info a:hover {
      color: #005a9e;
      text-decoration: underline;
    }
  `;

  return (
    <div css={estilado}>
      <div className="header">
        <img
          className="ayto-img"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Plaza_de_la_Constitucion_Fuento_de_Cantos_Spain_22_09_2012.JPG"
          alt="Ayuntamiento Fuente de Cantos"
        />
        <h1 className="ayto-title">Ayuntamiento de Fuente de Cantos</h1>
      </div>
      <div className="ayto-info">
        <p>
          <strong>Teléfono: 924 50 02 11</strong>
        </p>
        <p>
          <strong>
            Dirección: Pl. Constitución, 1, 06240 Fuente de Cantos, Badajoz
          </strong>
        </p>
        <a href="https://www.fuentedecantos.eu/" target="_blank">
          Página Web del Ayuntamiento
        </a>
      </div>
      <Button onClick={colorFondoHandler}>Cambiar color de fondo</Button>
    </div>
  );
};

export default Widget;
