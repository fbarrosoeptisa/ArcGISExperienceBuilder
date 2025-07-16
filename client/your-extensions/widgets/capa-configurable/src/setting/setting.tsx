import { React, type IMConfig } from 'jimu-core';
import type { AllWidgetSettingProps } from 'jimu-for-builder';
import { UrlInput, type UrlInputResult } from 'jimu-ui';
import {
  SettingSection,
  MapWidgetSelector,
} from 'jimu-ui/advanced/setting-components';

function Setting(props: AllWidgetSettingProps<IMConfig>) {
  const mapWidgetSelectHandler = (mapWidgetIds: string[]): void => {
    props.onSettingChange({ id: props.id, useMapWidgetIds: mapWidgetIds });
  };

  const urlInputHandler = (urlInputResult: UrlInputResult) => {
    if (urlInputResult.valid) {
      props.onSettingChange({
        id: props.id,
        config: props.config.set('urlService', urlInputResult.value),
      });
    }
  };

  return (
    <>
      <SettingSection title={'Selecciona el mapa'}>
        <MapWidgetSelector
          useMapWidgetIds={props.useMapWidgetIds}
          onSelect={mapWidgetSelectHandler}
        />
      </SettingSection>
      <SettingSection title={'Selecciona el mapa'}>
        <UrlInput
          schemes={['https']}
          onAcceptValue={urlInputHandler}
        ></UrlInput>
      </SettingSection>
    </>
  );
}

export default Setting;
