import { React, type IMConfig } from 'jimu-core';
import type { AllWidgetSettingProps } from 'jimu-for-builder';
import {
  SettingSection,
  MapWidgetSelector,
} from 'jimu-ui/advanced/setting-components';

function Setting(props: AllWidgetSettingProps<IMConfig>) {
  const mapWidgetSelectHandler = (mapWidgetIds: string[]): void => {
    props.onSettingChange({ id: props.id, useMapWidgetIds: mapWidgetIds });
  };

  return (
    <SettingSection title={'Selecciona el mapa'}>
      <MapWidgetSelector
        useMapWidgetIds={props.useMapWidgetIds}
        onSelect={mapWidgetSelectHandler}
      />
    </SettingSection>
  );
}

export default Setting;
