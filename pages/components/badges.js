import React from 'react';
import { appModifiers } from '../utils';

import Badges from '../../src/components/badges';

const Alerts = () => (
  <div className="container">
    <div className="row">

      <div className="col">

        <h3>Variations</h3>

        {
          appModifiers.map(modifier => (
            <Badges
              modifier={modifier}
              key={appModifiers.indexOf(modifier)}
              style={{
                marginRight: '5px'
              }}
            >
              Modifier - {modifier}
            </Badges>

          ))
        }

        <h3>Outline</h3>
        {
          appModifiers.map(modifier => (
            <Badges
              modifier={modifier}
              key={appModifiers.indexOf(modifier)}
              outline
              style={{
                marginBottom: '10px',
                marginRight: '5px'
              }}
            >
              Dismissible - {modifier}
            </Badges>

          ))
        }

        <h3>Pill</h3>
        {
          appModifiers.map(modifier => (
            <Badges
              modifier={modifier}
              key={appModifiers.indexOf(modifier)}
              pill
              style={{
                marginBottom: '10px',
                marginRight: '5px'
              }}
            >
              Dismissible - {modifier}
            </Badges>

          ))
        }
      </div>

    </div>
  </div>
);

export default Alerts;
