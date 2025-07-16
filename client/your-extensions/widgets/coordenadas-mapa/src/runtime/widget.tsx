import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import type MapView from 'esri/views/MapView';
import type WebMap from 'esri/WebMap';
import { useState } from 'react';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [coord, setCoordState] = useState<__esri.Point>();
  const activeViewHandler = (activeView: JimuMapView): void => {
    // En función de si usamos mapas 2D o 3D la vista será diferente
    const view = activeView.view as MapView;
    const mapa = view.map as WebMap;

    // Evento Click
    // view.on('click', (clickEvent) => {
    //   const puntoGeometria = clickEvent.mapPoint;
    //   setCoordState(puntoGeometria);
    // });

    // Evento Pointer Move
    view.on('pointer-move', (pointerMoveEvent) => {
      const puntoGeometria = view.toMap({
        x: pointerMoveEvent.x,
        y: pointerMoveEvent.y,
      });
      setCoordState(puntoGeometria);
    });
  };

  return (
    <div className="plantilla-mapa">
      {props.useMapWidgetIds !== undefined &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}
          >
            {coord !== undefined && (
              <>
                <p>
                  <strong>Latitud: </strong> {coord.latitude}
                </p>
                <p>
                  <strong>Longitud: </strong>
                  {coord.longitude}
                </p>
              </>
            )}
          </JimuMapViewComponent>
        )}
    </div>
  );
};

export default Widget;
