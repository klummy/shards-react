import React from 'react';
import { CodeSpecimen, Page } from 'catalog';

import { appModifiers } from '../utils';

import Alert from '../../src/components/alerts';

const Alerts = () => (
  <Page>

    <div className="container">
      <div className="row">

        <div className="col-sm-12">
          <h3>Usage</h3>
          <CodeSpecimen lang="jsx" dark>
            {
            `
<Alert
  modifier="string|required"
  dismissible="boolean|optional"
>
  Text
</Alert>

See usage section for list of modifier texts
`
          }
          </CodeSpecimen>
        </div>

        <div className="col-sm-12">

          <h3>Variations</h3>
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
  </Page>
);

export default Alerts;
