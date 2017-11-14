import React from 'react';
import { CodeSpecimen, Page } from 'catalog';

import { appModifiers } from '../utils';
import Badge from '../../src/components/badges';

const Alerts = () => (
  <Page>

    <div className="container">
      <div className="row">

        <div className="col-sm-12">
          <h3>Usage</h3>
          <CodeSpecimen lang="jsx" dark>
            {
              `
<Badge
  modifier="string|optional"
  outline="boolean|optional"
  pill="boolean|optional"
>
  Text
</Badge>

See usage section for list of modifier texts
`
            }
          </CodeSpecimen>
        </div>


        <div className="col-sm-12">

          <h3>Variations</h3>

          {
          appModifiers.map(modifier => (
            <Badge
              modifier={modifier}
              key={appModifiers.indexOf(modifier)}
              style={{
                marginRight: '5px'
              }}
            >
              Modifier - {modifier}
            </Badge>

          ))
        }

          <h3>Outline</h3>
          {
          appModifiers.map(modifier => (
            <Badge
              modifier={modifier}
              key={appModifiers.indexOf(modifier)}
              outline
              style={{
                marginBottom: '10px',
                marginRight: '5px'
              }}
            >
              Dismissible - {modifier}
            </Badge>

          ))
        }

          <h3>Pill</h3>
          {
          appModifiers.map(modifier => (
            <Badge
              modifier={modifier}
              key={appModifiers.indexOf(modifier)}
              pill
              style={{
                marginBottom: '10px',
                marginRight: '5px'
              }}
            >
              Pill - {modifier}
            </Badge>

          ))
        }
        </div>

      </div>
    </div>
  </Page>
);

export default Alerts;
