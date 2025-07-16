import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import type MapView from 'esri/views/MapView';
import Legend from 'esri/widgets/Legend';
import { useEffect, useState } from 'react';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [activeView, setActiveView] = useState<JimuMapView>();

  useEffect(() => {
    if (activeView !== undefined) {
      const view = activeView.view as MapView;
      const leyenda = new Legend({
        view,
      });

      view.ui.add(leyenda, 'bottom-left');

      return () => {
        view.ui.remove(leyenda);
      };
    }
  }, [activeView]);

  const activeViewHandler = (jmv: JimuMapView): void => {
    setActiveView(() => jmv);
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
    </div>
  );
};

export default Widget;
