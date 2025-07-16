import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import './widget.css';
import { useEffect, useState } from 'react';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import Sketch from 'esri/widgets/Sketch';
import Query from 'esri/rest/support/Query';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [activeView, setActiveView] = useState<JimuMapView>();

  const activeViewHandler = (jmv: JimuMapView): void => {
    setActiveView(() => jmv);
  };

  useEffect(() => {
    if (activeView) {
      const capaGraficaSketch = new GraphicsLayer({});
      const widgetSketch = new Sketch({
        view: activeView.view,
        layer: capaGraficaSketch,
        toolbarKind: 'floating',
        availableCreateTools: ['point'],
      });
      activeView.view.map.add(capaGraficaSketch);
      activeView.view.ui.add(widgetSketch, 'top-right');

      widgetSketch.on('create', (createEvent) => {
        if (createEvent.tool === 'point' && createEvent.state === 'complete') {
          capaGraficaSketch.removeAll();

          const grafico = createEvent.graphic;
          capaGraficaSketch.add(grafico);

          const parametrosQuery = new Query({
            where: 'ENP_FGRAL=2',
            returnGeometry: true,
            outFields: ['*'],
          });

          const capaEspaciosNaturales = activeView.view.map.layers.getItemAt(
            0,
          ) as __esri.FeatureLayer;

          capaEspaciosNaturales.queryFeatures(parametrosQuery).then((res) => {
            console.log(res);
          });
        }
      });
    }
  }, [activeView]);

  return (
    <div>
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
