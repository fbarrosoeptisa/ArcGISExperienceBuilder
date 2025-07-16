import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { Button } from 'jimu-ui';
import { useState } from 'react';
import type MapView from 'esri/views/MapView';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [activeView, setActiveView] = useState<JimuMapView>();

  const activeViewHandler = (jmv: JimuMapView): void => {
    setActiveView(() => jmv);
  };

  const rotarMapaHandler = () => {
    if (activeView !== undefined) {
      const mapView = activeView.view as MapView;
      mapView.rotation = mapView.rotation + 20;
    }
  };

  return (
    <div className="plantilla-mapa">
      {props.useMapWidgetIds !== undefined &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}
          />
        )}
      <Button onClick={rotarMapaHandler}>Rotar mapa</Button>
    </div>
  );
};

export default Widget;
