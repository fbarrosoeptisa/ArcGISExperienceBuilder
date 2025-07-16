import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { Button } from 'jimu-ui';
import './widget.css';
import Graphic from 'esri/Graphic';
import { useEffect, useState } from 'react';
import type MapView from 'esri/views/MapView';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol.js';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [activeView, setActiveView] = useState<JimuMapView>();

  const activeViewHandler = (jmv: JimuMapView): void => {
    setActiveView(() => jmv);
  };

  useEffect(() => {
    if (activeView !== undefined) {
      const vista = activeView.view as MapView;
      const capaGraficaGL = new GraphicsLayer({});
      // Se inicializa vacía la capa
      vista.map.add(capaGraficaGL);

      const evento = vista.on('click', (clickEvent) => {
        const geometria = clickEvent.mapPoint;
        const simpleMarkerSymbol = new SimpleMarkerSymbol({
          angle: 0,
          color: [0, 236, 240, 1],
          outline: {
            cap: 'round',
            color: [0, 122, 194, 1],
            join: 'round',
            miterLimit: 1,
            style: 'solid',
            width: 1,
          },
          path: 'undefined',
          size: 12,
          style: 'circle',
          xoffset: 0,
          yoffset: 0,
        });
        const grafico = new Graphic({
          geometry: geometria,
          symbol: simpleMarkerSymbol,
        });
        capaGraficaGL.add(grafico);
      });

      return () => {
        evento.remove();
        vista.map.remove(capaGraficaGL);
      };
    }
  }, [activeView]);

  return (
    <div className="anadir-capa">
      {props.useMapWidgetIds !== undefined &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}
          ></JimuMapViewComponent>
        )}
      <Button type="primary">Haz click en el mapa para crear un punto</Button>
    </div>
  );
};

export default Widget;
