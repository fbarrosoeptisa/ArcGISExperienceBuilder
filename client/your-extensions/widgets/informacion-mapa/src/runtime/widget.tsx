import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import type MapView from 'esri/views/MapView';
import type WebMap from 'esri/WebMap';
import { useState } from 'react';

interface InformacionMapa {
  nombre: string;
  descripcion: string;
  tags: string[];
  id: string;
}
const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [infoMapa, setInfoMapa] = useState<InformacionMapa>();

  const activeViewHandler = (activeView: JimuMapView): void => {
    // En función de si usamos mapas 2D o 3D la vista será diferente
    const view = activeView.view as MapView;
    const mapa = view.map as WebMap;
    const portalItem = mapa.portalItem;

    const informacion: InformacionMapa = {
      nombre: portalItem.title,
      descripcion: portalItem.description,
      tags: portalItem.tags,
      id: portalItem.id,
    };

    setInfoMapa(informacion);
  };

  return (
    <div className="plantilla-mapa">
      {props.useMapWidgetIds !== undefined &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}
          >
            {infoMapa !== undefined && (
              <>
                <h2>{infoMapa.nombre}</h2>
                <p>Descripción: {infoMapa.descripcion}</p>
                <ul>
                  {infoMapa.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
                <p>Id: {infoMapa.id}</p>
              </>
            )}
          </JimuMapViewComponent>
        )}
    </div>
  );
};

export default Widget;
