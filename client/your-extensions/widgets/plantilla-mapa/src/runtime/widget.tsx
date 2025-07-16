import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import type MapView from 'esri/views/MapView';
import type WebMap from 'esri/WebMap';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const activeViewHandler = (activeView: JimuMapView): void => {
    // En función de si usamos mapas 2D o 3D la vista será diferente
    const view = activeView.view as MapView;
    const mapa = view.map as WebMap;
    console.log('mapa', mapa);
  };

  return (
    <div className="plantilla-mapa">
      {props.useMapWidgetIds !== undefined &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}
          ></JimuMapViewComponent>
        )}
    </div>
  );
};

export default Widget;
