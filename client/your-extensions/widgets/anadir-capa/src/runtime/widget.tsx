import { React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { UrlInput, Button, type UrlInputResult } from 'jimu-ui';
import './widget.css';
import { useState } from 'react';
import FeatureLayer from 'esri/layers/FeatureLayer';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [url, setUrl] = useState<string>();
  const [activeView, setActiveView] = useState<JimuMapView>();

  const activeViewHandler = (jimuMapView: JimuMapView): void => {
    setActiveView(() => jimuMapView);
  };

  const urlServiceHandler = (urlInputResult: UrlInputResult) => {
    setUrl(urlInputResult.valid ? urlInputResult.value : '');
  };

  const addServiceToMapHandler = () => {
    const capaFL = new FeatureLayer({ url });
    activeView.view.map.add(capaFL);
  };

  return (
    <div className="anadir-capa">
      {props.useMapWidgetIds !== undefined &&
        props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}
          ></JimuMapViewComponent>
        )}
      <UrlInput schemes={['https']} onAcceptValue={urlServiceHandler} />
      <Button type="primary" onClick={addServiceToMapHandler}>
        Añadir Capa
      </Button>
    </div>
  );
};

export default Widget;
