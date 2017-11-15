import React from 'react';
import { CodeSpecimen, Page } from 'catalog';

import Datepicker from '../../src/components/datepicker';

const DatepickerPage = () => (
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
          <Datepicker />
        </div>

      </div>
    </div>
  </Page>
);

export default DatepickerPage;
