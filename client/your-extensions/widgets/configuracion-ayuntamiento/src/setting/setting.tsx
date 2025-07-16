import { React, type IMConfig } from 'jimu-core';
import type { AllWidgetSettingProps } from 'jimu-for-builder';
import './setting.css';

function Setting(props: AllWidgetSettingProps<IMConfig>) {
  const nombreHandler = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('nombre', evento.target.value),
    });
  };

  const direccionHandler = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('direccion', evento.target.value),
    });
  };

  const telefonoHandler = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('telefono', evento.target.value),
    });
  };

  const webHandler = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('web', evento.target.value),
    });
  };

  const imagenHandler = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('imagen', evento.target.value),
    });
  };

  return (
    <div className="settingsForm">
      <p>Nombre del Ayuntamiento</p>
      <input type="text" onChange={nombreHandler} />

      <p>Teléfono</p>
      <input type="text" onChange={telefonoHandler} />

      <p>Dirección</p>
      <input type="text" onChange={direccionHandler} />

      <p>Web</p>
      <input type="text" onChange={webHandler} />

      <p>Imagen</p>
      <input type="text" onChange={imagenHandler} />
    </div>
  );
}

export default Setting;
