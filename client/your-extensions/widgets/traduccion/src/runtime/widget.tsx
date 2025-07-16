import { FormattedMessage, React, type AllWidgetProps } from 'jimu-core';
import type { IMConfig } from '../config';
import mensajesPorDefecto from './translations/default';

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="translations">
      <h3>
        <FormattedMessage
          id="helloWorld"
          defaultMessage={mensajesPorDefecto.helloWorld}
        ></FormattedMessage>
      </h3>
    </div>
  );
};

export default Widget;
