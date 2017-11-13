import React from 'react';

import Alert from '../../src/components/alerts';

const appModifiers = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark'
];

const Alerts = () => (
  <div className="container">
    <div className="row">

      <div className="col">

        <h3>Alert States</h3>

        {
          appModifiers.map(modifier => (
            <Alert
              key={appModifiers.indexOf(modifier)}
              modifier={modifier}
            >
              Modifier - {modifier}
            </Alert>

          ))
        }

        <h3>Dismissible Alerts</h3>
        {
          appModifiers.map(modifier => (
            <Alert
              dismissible
              key={appModifiers.indexOf(modifier)}
              modifier={modifier}
            >
              Dismissible - {modifier}
            </Alert>

          ))
        }
      </div>

    </div>
  </div>
);

export default Alerts;
