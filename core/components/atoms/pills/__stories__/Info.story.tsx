import * as React from 'react';
import Pills from '../Pills';

export const info = () => (
  <Pills
    appearance="primary"
    subtle={false}
  >
    {'Pills'}
  </Pills>
);

export default {
  title: 'Atoms|Pills',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills'
      }
    }
  }
};
