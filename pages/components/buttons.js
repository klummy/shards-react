import React from 'react';
import { CodeSpecimen, Page } from 'catalog';

import { appModifiers } from '../utils';
import Button from '../../src/components/buttons';

const Buttons = () => (
  <Page>

    <div className="container">
      <div className="row">

        <div className="col-sm-12">
          <h3>Usage</h3>
          <CodeSpecimen lang="jsx" dark>
            {
              `
<Button
  modifier="string|optional"
  outline="boolean|optional"
  pill="boolean|optional"
  squared="boolean|optional"
>
  Text
</Button>

See usage section for list of modifier texts
`
            }
          </CodeSpecimen>
        </div>


        <div className="col-sm-12">

          <h3>Variations</h3>

          {
            appModifiers.map(modifier => (
              <Button
                modifier={modifier}
                key={appModifiers.indexOf(modifier)}
                style={{
                  marginBottom: '10px',
                  marginRight: '5px'
                }}
              >
                Modifier - {modifier}
              </Button>

            ))
          }

          <h3>Outline</h3>
          {
            appModifiers.map(modifier => (
              <Button
                modifier={modifier}
                key={appModifiers.indexOf(modifier)}
                outline
                style={{
                  marginBottom: '10px',
                  marginRight: '5px'
                }}
              >
                Dismissible - {modifier}
              </Button>

            ))
          }

          <h3>Pill</h3>
          {
            appModifiers.map(modifier => (
              <Button
                modifier={modifier}
                key={appModifiers.indexOf(modifier)}
                pill
                style={{
                  marginBottom: '10px',
                  marginRight: '5px'
                }}
              >
                Pill - {modifier}
              </Button>

            ))
          }

          <h3>Squared</h3>
          {
            appModifiers.map(modifier => (
              <Button
                modifier={modifier}
                key={appModifiers.indexOf(modifier)}
                squared
                style={{
                  marginBottom: '10px',
                  marginRight: '5px'
                }}
              >
                Square - {modifier}
              </Button>

            ))
          }
        </div>

      </div>
    </div>
  </Page>
);

export default Buttons;
